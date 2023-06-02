// used with react-router-dom, to lazy load AboutUs_Lazy.jsx component.

import { NavLink } from 'react-router-dom';
import './Style_Home_Lazy.css';

const Home_Lazy = () => {
	return (
		<div>
			<header>
				<NavLink to={'/'}>Home</NavLink>
				<NavLink to={'/about'}>About</NavLink>
				<NavLink to={'/contact'}>Contact</NavLink>
			</header>
			<h2>Home page 🏠</h2>
		</div>
	);
};
export default Home_Lazy;
