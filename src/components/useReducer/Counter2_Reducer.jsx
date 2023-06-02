import React from 'react';

const initialState = {
	firstCounter: 0,
	secondCounter: 10,
};
const reducerFunc = (currState, actionFunc) => {
	switch (actionFunc.type) {
		case 'IncrementCounter1':
			return { ...currState, firstCounter: currState.firstCounter + actionFunc.value };
		case 'DecrementCounter1':
			return { ...currState, firstCounter: currState.firstCounter - actionFunc.value };
		case 'IncrementCounter2':
			return { ...currState, secondCounter: currState.secondCounter + actionFunc.value };
		case 'DecrementCounter2':
			return { ...currState, secondCounter: currState.secondCounter - actionFunc.value };
		case 'Reset':
			return initialState;
		default:
			return currState;
	}
};

const Counter2_Reducer = () => {
	const [currCount, dispatchMethod] = React.useReducer(reducerFunc, initialState);
	return (
		<div>
			<h3>
				Counter2_Reducer:{' '}
				<div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
					<div>1: {currCount.firstCounter}</div>
					<div>2: {currCount.secondCounter}</div>
				</div>
			</h3>
			<p>little complex useReducer implementation by manipulating an object and it's multiple values.</p>
			<button
				onClick={() => {
					dispatchMethod({ type: 'IncrementCounter1', value: 1 });
				}}
			>
				Counter 1 +1
			</button>
			<button
				onClick={() => {
					dispatchMethod({ type: 'DecrementCounter1', value: 1 });
				}}
			>
				Counter 1 -1
			</button>
			<button
				onClick={() => {
					dispatchMethod({ type: 'IncrementCounter1', value: 5 });
				}}
			>
				Counter 1 +5
			</button>
			<button
				onClick={() => {
					dispatchMethod({ type: 'DecrementCounter1', value: 5 });
				}}
			>
				Counter 1 -5
			</button>
			<div>
				<button
					onClick={() => {
						dispatchMethod({ type: 'IncrementCounter2', value: 1 });
					}}
				>
					Counter 2 +1
				</button>
				<button
					onClick={() => {
						dispatchMethod({ type: 'DecrementCounter2', value: 1 });
					}}
				>
					Counter 2 -1
				</button>
			</div>
			<div>
				<button
					onClick={() => {
						dispatchMethod({ type: 'Reset' });
					}}
				>
					Reset Both
				</button>
			</div>
			<hr />
		</div>
	);
};

export default Counter2_Reducer;
