/*
### What is Error Boundary?
- Error boundaries are **React components** that catch JavaScript error in their child component tree, log those errors, and display a fallback UI.
- A class component that implements **either one** or **both** of the lifecycle methods ***getDerivedStateFromError*** and ***componentDidCatch*** becomes an error boundary.
- The static method ***getDerivedStateFromError(error)*** method is used to render a fallback UI after an error is thrown and the ***componentDidCatch(error, info)*** method is used to log the error information.
- Error Boundary component must be a **react class component**
*/

// import PropTypes from 'prop-types';
import React, { Component } from 'react';

export class ErrorBoundary extends Component {
	// In class components, props are available on the props object that’s accessible via the this keyword. You can simply access them like you would properties on any other object.
	// prop validation, not required in this case.
	//     static defaultProps = {
	//       val: 'val prop'
	//     }
	//   static propTypes = {
	//     val: PropTypes.string.isRequired
	//   }

	constructor(props) {
		super(props);

		this.state = {
			hasError: false,
		};
	}

	// NOTE - this method is used to catch any errors in child components & throw a fallback UI instead of demounting entire app.
	// this function will be invoked when any of it's children throw any error, which inturn will set state to false & based on states condition we will render components.
	static getDerivedStateFromError(error) {
		return { hasError: true };
	}

	// NOTE - this method is used to run a custom function on error detection, such as sending logs to server
	componentDidCatch(error, info) {
		console.log(info);
	}

	render() {
		if (this.state.hasError) {
			return <h3>Something went wrong...</h3>;
		}
		return this.props.children;
	}
}

export default ErrorBoundary;
