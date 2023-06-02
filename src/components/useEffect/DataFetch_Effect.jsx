import React from 'react';
import axios from 'axios';

const DataFetch_Effect = () => {
	const [posts, setPosts] = React.useState([]);
	const [displayState, setDisplayState] = React.useState(false);

	function axiosFetch() {
		axios
			.get('https://jsonplaceholder.typicode.com/albums')
			.then((resData) => {
				console.log(resData);
				// console.log('stringified resData: ', JSON.stringify(resData));
				setPosts(resData.data);
			})
			.catch((err) => console.log(err));
	}

	React.useEffect(axiosFetch, []);

	return (
		<div>
			<h3>
				DataFetch: <span style={{ fontSize: '0.8em' }}>https://jsonplaceholder.typicode.com/albums</span>
			</h3>
			<p>2 useStaes & 1 useEffect for controlling 'fetch' side effect</p>
			<button onClick={() => setDisplayState(!displayState)}>{!displayState ? 'Show fetched data' : 'Hide data'}</button>
			{displayState && <ul>{posts.map((post) => <li key={post.id}>{post.title}</li>).slice(0, 10)}</ul>}
			<hr />
		</div>
	);
};

export default DataFetch_Effect;
