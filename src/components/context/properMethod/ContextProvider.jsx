// this is a context store that creates contexts, by using createContext() hook.
//

import { useState, createContext } from 'react';

const ContextStore = createContext();

export const ContextProvider = ({ children }) => {
	const [contextState, setContextState] = useState([0, 1, 2]);

	return (
		<>
			<ContextStore.Provider value={[contextState, setContextState]}>{children}</ContextStore.Provider>
		</>
	);
};

export default ContextStore;
