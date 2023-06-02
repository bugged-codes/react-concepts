import { useEffect, useState } from 'react';

const CLM_functionalComp = ({ num }) => {
	const [prevNum, setPrevNum] = useState(0);

	useEffect(() => {
		// first time logging of this msg is done on component mounting.
		// this logic is wrong as every time dependency changes component is rerendered and remounted.
		if (prevNum === num) {
			console.log('Functional Component Mounted: ⛰️');
		} else {
			console.log('Functional Component Updated: ⬆️');
		}

		// componentWillUnmount
		return () => {
			console.log('Functional Component Unmounted: 💀');
		};
	}, [num]);

	return <>{num} = Functional Component</>;
};
export default CLM_functionalComp;
