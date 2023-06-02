import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home_Lazy from './Home_Lazy';
import Contact_Lazy from './Contact_Lazy';

// lazy() takes a callback function that again takes dynamic import() promise, which then converted to a module that contains a *default export*
// component to be lazy loaded should have default export
const LazyAbout = lazy(() => import('./AboutUs_Lazy'));

const Router_Lazy = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home_Lazy />} />

				{/* Suspense() is used to suspend the page rendering, it takes fallback prop that accepts any element or component. */}
				<Route
					path="/about"
					element={
						<Suspense fallback={'Loading...'}>
							<LazyAbout />
						</Suspense>
					}
				/>

				<Route path="/contact" element={<Contact_Lazy />} />
			</Routes>
		</>
	);
};
export default Router_Lazy;
