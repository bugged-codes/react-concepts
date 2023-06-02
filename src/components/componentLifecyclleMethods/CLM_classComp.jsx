import { Component } from 'react';

// this is for component updating
class CLM_classComp extends Component {
	// componentDidUpdate takes 2 params, first is previous pops & other is previous state.
	componentDidUpdate(prevProps, prevState) {
		// checking if prop value that we have is same as received or not, if it's not that mens component has updated.
		if (prevProps.num !== this.props.num) {
			console.log('ClassComponet displaying counter value updated.');
		}
	}

	// this will show log when we remove class counter from Comp_LifecycleMethods.jsx
	componentWillUnmount() {
		console.log('Class Component Unmounted: 💀');
	}

	render() {
		return <>Class Component = {this.props.num}</>;
	}
}

export default CLM_classComp;
