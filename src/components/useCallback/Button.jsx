import React from 'react';
const Button = ({ handleClick, children, text }) => {
	return (
		<div>
			<button onClick={handleClick}>{children || text}</button>
			{console.log(children || text, ' Button Called')}
		</div>
	);
};
export default React.memo(Button);
