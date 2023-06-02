import React from 'react';

const Counter2_State = () => {
	const initialCount = 0;
	const [count, setCount] = React.useState(initialCount);

	const incrementByFive = () => {
		for (let i = 0; i < 5; i++) {
			setCount((preVal) => preVal + 1);
		}
	};

	function decrementByOne() {
		setCount((preCount) => preCount - 1);
	}

	return (
		<div>
			<h3>useState Counter2: {count}</h3>
			<button onClick={() => setCount((prevCount) => prevCount + 1)}>Increment HookCounterTwo by 1</button>
			&nbsp;&nbsp;
			<button onClick={decrementByOne}>Decrement HookCounterTwo by 1</button>
			&nbsp;&nbsp;
			<button onClick={() => setCount(initialCount)}>Reset HookCounterTwo</button>
			&nbsp;&nbsp;
			<button onClick={incrementByFive}>Increment HookCounterTwo by 5</button>
			<hr />
		</div>
	);
};

export default Counter2_State;
