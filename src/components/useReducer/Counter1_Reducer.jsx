import React from 'react';

const initialState = 0;
const reducerFunc = (currState, actionFunc) => {
	switch (actionFunc) {
		case 'Increment':
			return currState + 1;
		case 'Decrement':
			return currState - 1;
		case 'Reset':
			return initialState;
		default:
			return currState;
	}
};

const Counter1_Reducer = () => {
	const [currCount, dispatchMethod] = React.useReducer(reducerFunc, initialState);

	function resetDispatch() {
		dispatchMethod('Reset');
	}

	return (
		<div>
			<h3>Counter_Reducer: {currCount}</h3>
			<p>simple useReducer hook implementation.</p>
			<button onClick={() => dispatchMethod('Increment')}>Increment Count</button>&nbsp;&nbsp;
			<button onClick={() => dispatchMethod('Decrement')}>Decrement Count</button>&nbsp;&nbsp;
			<button onClick={resetDispatch}>Reset Count</button>&nbsp;&nbsp;
			<hr />
		</div>
	);
};

export default Counter1_Reducer;
