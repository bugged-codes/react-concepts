import React from 'react';
import { Context1, Context2 } from './Alt_ContextData';

const CompB = () => {
	const firstContext = React.useContext(Context1);
	const secondContext = React.useContext(Context2);

	return (
		<div>
			<h3>CompB: </h3>
			<p>context consumer</p>
			<ul>
				firstContext:
				{firstContext.map((nam, ind) => {
					return (
						<li key={ind}>
							{nam.fName} {nam.lName}
						</li>
					);
				})}
				<br />
				secondContext:
				<li>{secondContext}</li>
			</ul>
			<hr />
		</div>
	);
};

export default CompB;
