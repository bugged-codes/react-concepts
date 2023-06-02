import React from 'react';

const MouseMove_Effect = () => {
	const [x, setX] = React.useState(0);
	const [y, setY] = React.useState(0);
	const [display, setDisplay] = React.useState(false);

	// TODO-Trial
	// * mousemove is a event that gets fired every time mouse is moved inside a window tab, even though written outside of useEffect.

	const logMouseMovement = (e) => {
		console.log('Mouse Moved');
		setX(e.clientX);
		setY(e.clientY);
	};

	React.useEffect(() => {
		console.log('useEffect Called.');
		if (display === true) {
			window.addEventListener('mousemove', logMouseMovement);
		}

		return () => {
			console.log('logMouseMovement unmounted');
			window.removeEventListener('mousemove', logMouseMovement);
		};
	}, [display]);

	return (
		<div>
			<h3>MouseMove_Effect: </h3>
			<p>3 useStates & useEffect to track mouse coordinates</p>
			<button onClick={() => setDisplay(!display)}>Toggle coordinates visibility</button>
			{display && (
				<p>
					Mouse pointer coordinates = X: {x}, Y: {y}
				</p>
			)}
			<hr />
		</div>
	);
};

export default MouseMove_Effect;
