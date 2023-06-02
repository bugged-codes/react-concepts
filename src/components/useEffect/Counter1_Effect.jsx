import React, { useEffect, useState } from 'react';

const Counter1_Effect = () => {
	const [count, setCount] = useState(5);

	useEffect(() => {
		document.title = `Click ${count} more times.`;
		console.log('Title changed.');
	});

	return (
		<div>
			<h3>Effect Counter1: Changes page title.</h3>
			<p>single useEffect & useState to change document title upto 5 times. </p>
			<button onClick={() => setCount((pre) => (pre >= 1 ? pre - 1 : 0))}>{count >= 1 ? `Click ${count} more times` : `Refresh the page to reset counter`}</button>
			<hr />
		</div>
	);
};

export default Counter1_Effect;
