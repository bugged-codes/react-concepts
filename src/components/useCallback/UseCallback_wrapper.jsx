import React, { useState, useCallback } from 'react';
import Title from './Title';
import Counter from './Counter';
import Button from './Button';

const CallbackWrapper = () => {
	const [first, setFirst] = useState(22);
	const [second, setSecond] = useState(500000);

	const incrementFirst = useCallback(() => {
		setFirst((pre) => pre + 1);
	}, [first]);

	const incrementSecond = useCallback(() => {
		setSecond((pre) => pre + 1000);
	}, [second]);

	return (
		<div>
			<Title />
			<Counter state={first} text={'Age Counter'} />
			<Button handleClick={incrementFirst} text="Increment Age"></Button>
			<Counter state={second} text="Salary Counter" />
			<Button handleClick={incrementSecond} text="Increment Salary"></Button>
			<hr />
		</div>
	);
};
export default React.memo(CallbackWrapper);
