// import { lazy, Suspense } from 'react';
// const LazyComp = lazy(() => import('./components/lazy-loading/justComponents/Comp2_Lazy.jsx'));
// import Comp1_Lazy from './components/lazy-loading/justComponents/Comp1_Lazy';
import './App.css';
// import ErrorBoundary from './components/errorBoundary/ErrorBoundary';
// import ContextConsumer from './components/context/properMethod/ContextConsumer';
// import { ContextProvider } from './components/context/properMethod/ContextProvider';
// import ErrorExample from './components/errorBoundary/ErrorExample';
import ModalContainer from './components/portals/ModalContainer';
// import Counter1_State from './components/Counter1_State.jsx';
// import Counter2_State from './components/Counter2_State.jsx';
// import Counter3_State from './components/Counter3_State.jsx';
// import Counter4_State from './components/Counter4_State.jsx';
// import Counter1_Effect from './components/useEffect/Counter1_Effect.jsx';
// import MouseMove_Effect from './components/useEffect/MouseMove_Effect.jsx';
// import IntervalUpdate_Effect from './components/useEffect/IntervalUpdate_Effect.jsx';
// import DataFetch_Effect from './components/useEffect/DataFetch_Effect.jsx';
// import DataFetchById_Effect from './components/useEffect/DataFetchById_Effect.jsx';
// import ContextData from './components/context/Alt_ContextData.jsx';
// import Counter1_Reducer from './components/useReducer/Counter1_Reducer.jsx';
// import Counter2_Reducer from './components/useReducer/Counter2_Reducer.jsx';
// import CallbackWrapper from './components/useCallback/UseCallback_wrapper.jsx';
// import UseMemo from './components/useMemo/UseMemo.jsx';
// import Person1 from './components/HOC/Person1.jsx';
// import Person2 from './components/HOC/Person2.jsx';
// import Comp_LifecycleMethods from './components/componentLifecyclleMethods/Comp_LifecycleMethods';
// import { BrowserRouter } from 'react-router-dom';
// import Router_Lazy from './components/lazy-loading/withRouter/Router_Lazy.jsx';

function App() {
	return (
		<div className="App">
			{/* <Counter1_State />
			<Counter2_State />
			<Counter3_State />
			<Counter4_State />
			<Counter1_Effect />
			<MouseMove_Effect />
			<IntervalUpdate_Effect />
			<DataFetch_Effect />
			<DataFetchById_Effect />
			<Alt_ContextData />
			<Counter1_Reducer />
			<Counter2_Reducer />
			<CallbackWrapper /> 
			<UseMemo />
			<Person1 />
			<Person2 />
			<Comp_LifecycleMethods />
			<BrowserRouter>
				<Router_Lazy />
			</BrowserRouter>
			<Comp1_Lazy />
			<Suspense fallback={'Loading Comp2...'}>
				<LazyComp />
			</Suspense>
			<ContextProvider>
				<ContextConsumer />
			</ContextProvider>
			<ErrorBoundary>
				<ErrorExample hero="Superman" />
			</ErrorBoundary>
			<ErrorBoundaryWrapper childsProp={'Batman'} />
			<ErrorBoundaryWrapper childsProp={'Joker'} />
			<ErrorBoundary>
				<ErrorExample hero="Joker" />
			</ErrorBoundary>
			*/}
			<ModalContainer />
		</div>
	);
}

// function ErrorBoundaryWrapper({ childsProp }) {
// 	// a wrapper like this can also be used(best to use it inside example file and export it after wrapping it with ErrorBoundary) to reduce repetitive ErrorBoundary writings
// 	return (
// 		<ErrorBoundary>
// 			<ErrorExample hero={childsProp} />
// 		</ErrorBoundary>
// 	);
// }
export default App;
