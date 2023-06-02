import React from 'react';
const Counter = ({ state, text }) => {
	return (
		<div>
			<h3>
				{text} {state}
				{console.log(text, ' Counter called')}
			</h3>
		</div>
	);
};
export default React.memo(Counter);
