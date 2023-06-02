// this is the component in which context is created as well provided to CompA & CompB
import React from 'react';
import CompB from './CompB';
import CompC_oldMethod from './CompC_oldMethod';

export const Context1 = React.createContext();
export const Context2 = React.createContext();

const ContextData = () => {
	// NOTE following method is same for old as well as new method to allow context in react.
	const context1Arr = [
		{ fName: 'Abcd', lName: 'Efgh' },
		{ fName: 'Ijkl', lName: 'Mnopq' },
	];
	const context2Str = 123456789;

	return (
		<div>
			<Context1.Provider value={context1Arr}>
				<Context2.Provider value={context2Str}>
					<CompB />
					<CompC_oldMethod />
				</Context2.Provider>
			</Context1.Provider>
		</div>
	);
};

export default ContextData;
