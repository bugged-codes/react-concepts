import { useState, useMemo } from 'react';

const UseMemo = () => {
	const [first, setfirst] = useState(1);
	const [second, setsecond] = useState(1);

	const incrementFirst = () => {
		setfirst((pre) => pre + 1);
	};

	const incrementSecond = () => {
		setsecond((pre) => pre + 1);
	};

	const isEven = useMemo(() => {
		let i = 0;
		while (i < 3000000000) i++;
		return second % 2 === 0;
	}, [second]);

	// const isEven = ()=>{
	//     let i = 0
	//     while(i<3000000000) i++
	//     return second % 2 === 0
	// }

	return (
		<div>
			<h3>useMemo: </h3>
			<p>2 useStates & 1 useMemo, used to display 2 counters and if 2nd counter value is even or odd after a little heavy calculation.</p>
			<div>
				<button onClick={incrementFirst}>Counter 1 = {first}</button>
			</div>
			<div>
				<button onClick={incrementSecond}>Counter 2 = {second}</button>
				<span>{isEven ? 'Even' : 'odd'}</span>
			</div>
			<hr />
		</div>
	);
};
export default UseMemo;
