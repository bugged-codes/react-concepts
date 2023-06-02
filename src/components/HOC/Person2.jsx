import WithMoney from './withMoney';

const Person2 = ({ state, handleClick }) => {
	return (
		<div>
			<h2>Person1: {state}</h2>
			<button onClick={handleClick}>Increase</button>
		</div>
	);
};
export default WithMoney(Person2);
