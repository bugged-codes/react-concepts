import React from 'react';

const IntervalUpdate_Effect = () => {
	const [counter, setCounter] = React.useState(0);
	const [display, setDisplay] = React.useState(false);

	function tick() {
		if (display === true) {
			setCounter(counter + 1);
		}
	}
	const effectFunction = () => {
		// console.log('effectFunction');
		const interval = setInterval(tick, 1000);
		return () => {
			// console.log('cleanupFunction');
			clearInterval(interval);
		};
	};
	React.useEffect(effectFunction, [counter, display]);

	return (
		<div>
			<h3>IntervalUpdate: {counter}</h3>
			<p>2 useStates & 1 useEffect to display clock like counter</p>
			<button onClick={() => setDisplay(!display)}>{!display ? 'Click to resume Counter' : 'Click to pause Counter'}</button>
			<hr />
		</div>
	);
};

export default IntervalUpdate_Effect;
