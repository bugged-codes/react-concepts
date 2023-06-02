import React from 'react';

const Counter1_State = () => {
	const [count, setCount] = React.useState(0);
	return (
		<div>
			<h3>Counter1: {count}</h3>
			<p>single useState</p>
			<button
				onClick={() => {
					setCount(count + 1);
				}}
			>
				Counter1 ++
			</button>
			<hr />
		</div>
	);
};

export default Counter1_State;
