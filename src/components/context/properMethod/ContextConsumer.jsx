import { useContext } from 'react';
import ContextStore from './ContextProvider';

const ContextConsumer = () => {
	const [contextState, setContextState] = useContext(ContextStore);

	return (
		<>
			<h2>{contextState.join(', ')}</h2>
			<button
				onClick={() =>
					setContextState((prevState) => {
						// let counter = 0;
						// for (const index of prevState) {
						// 	counter++;
						// }

						const lastIndex = prevState.length - 1;
						const lastElemnt = prevState[lastIndex];
						return [...prevState, lastElemnt + 1];
					})
				}
			>
				Add from consumer
			</button>
			<p>Initially contextStore has only 1,2,3 values. On click of button values are being added from contextConsumer component, with the help of setter function which was passed from contextStore.</p>
		</>
	);
};
export default ContextConsumer;
