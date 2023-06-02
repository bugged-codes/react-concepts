import { useState } from 'react';

const WithMoney = (OriginalComp) => {
	const newComp = () => {
		const [money, setMoney] = useState(10);
		const handleIncrease = () => {
			setMoney((pre) => pre * 2);
		};
		return <OriginalComp handleClick={handleIncrease} state={money} />;
	};
	return newComp;
};
export default WithMoney;
