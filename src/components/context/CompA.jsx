import React from 'react';
import CompB from './CompB';

const CompA = () => {
	return (
		<div>
			<h3>CompA: </h3>
			<p>CompA is not a context consumer.</p>
			<CompB />
			<hr />
		</div>
	);
};

export default CompA;
