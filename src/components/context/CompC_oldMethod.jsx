import React from 'react';
import { Context1, Context2 } from './Alt_ContextData';

const CompC_oldMethod = () => {
	// * before useContext() hook only way to use/consume multiple provided contexts was to chain those multiple contexts as below.

	return (
		<div>
			<h3>CompC_oldMethod: </h3>
			<p>old method of consuming context, by using functions inside Context.Consumer</p>
			<Context1.Consumer>
				{(arg1) => {
					return (
						<Context2.Consumer>
							{(arg2) => {
								return (
									<div>
										{console.log('arg1: ', arg1, '\narg2: ', arg2)}
										<ul>
											arg1:
											{arg1.map((name, index) => {
												return (
													<li key={index}>
														{name.fName} {name.lName}
													</li>
												);
											})}
											<br />
											arg2:
											<li>{arg2}</li>
										</ul>
									</div>
								);
							}}
						</Context2.Consumer>
					);
				}}
			</Context1.Consumer>
			<hr />
		</div>
	);
};

export default CompC_oldMethod;
