import React from 'react';
import axios from 'axios';

const DataFetchById_Effect = () => {
	const postObj = {};
	const [post, setPost] = React.useState(postObj);
	const [postId, setPostId] = React.useState(1);
	const [buttonPostId, setButtonPostId] = React.useState(1);

	function fetchPost() {
		axios
			.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
			.then((postData) => {
				console.log(postData);
				setPost(postData.data);
			})
			.catch((err) => console.log(err));
	}

	React.useEffect(fetchPost, [buttonPostId]);

	function handleClick() {
		if (postId <= 100) setButtonPostId(postId);
	}

	return (
		<div>
			<h3>DataFetchById: </h3>
			<input type="number" min={1} max={100} value={postId} onChange={(e) => setPostId(e.target.value)} />
			<button onClick={handleClick}>Fetch title by Id</button>
			<em>
				{' '}
				{post.id}: {post.title}
			</em>
			<hr />
		</div>
	);
};

export default DataFetchById_Effect;
