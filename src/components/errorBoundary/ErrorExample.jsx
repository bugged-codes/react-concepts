// this component will serve as a child for ErrorBoundary, when prop passed with false boolean value it will throw error & cause app to demount.

const ErrorExample = ({ hero }) => {
	if (hero === 'Joker') {
		throw new Error('No valid prop passed.');
	}
	return <div>{hero}</div>;
};
export default ErrorExample;
