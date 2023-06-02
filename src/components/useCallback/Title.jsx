import React from 'react';
const Title = () => {
	return (
		<div>
			This is title.
			{console.log('this is title component')}
		</div>
	);
};
export default React.memo(Title);
