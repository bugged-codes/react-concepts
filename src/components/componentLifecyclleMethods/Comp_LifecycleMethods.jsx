/*
    The component lifecycle has three distinct lifecycle phases:

Mounting: The component is ready to mount in the browser DOM. This phase covers initialization from constructor(), getDerivedStateFromProps(), render(), and componentDidMount() lifecycle methods.

Updating: In this phase, the component gets updated in two ways, sending the new props and updating the state either from setState() or forceUpdate(). This phase covers getDerivedStateFromProps(), shouldComponentUpdate(), render(), getSnapshotBeforeUpdate() and componentDidUpdate() lifecycle methods.

Unmounting: In this last phase, the component is not needed and gets unmounted from the browser DOM. This phase includes componentWillUnmount() lifecycle method.



It's worth mentioning that React internally has a concept of phases when applying changes to the DOM. They are separated as follows

Render The component will render without any side effects. This applies to Pure components and in this phase, React can pause, abort, or restart the render.

Pre-commit Before the component actually applies the changes to the DOM, there is a moment that allows React to read from the DOM through the getSnapshotBeforeUpdate().

Commit React works with the DOM and executes the final lifecycles respectively componentDidMount() for mounting, componentDidUpdate() for updating, and componentWillUnmount() for unmounting


After react v16.3
"getDerivedStateFromProps": Invoked right before calling render() and is invoked on every render. This exists for rare use cases where you need a derived state. Worth reading if you need derived state.
"componentDidMount": Executed after first rendering and where all AJAX requests, DOM or state updates, and set up event listeners should occur.
"shouldComponentUpdate": Determines if the component will be updated or not. By default, it returns true. If you are sure that the component doesn't need to render after the state or props are updated, you can return a false value. It is a great place to improve performance as it allows you to prevent a re-render if component receives a new prop.
"getSnapshotBeforeUpdate": Executed right before rendered output is committed to the DOM. Any value returned by this will be passed into componentDidUpdate(). This is useful to capture information from the DOM i.e. scroll position.
"componentDidUpdate": Mostly it is used to update the DOM in response to prop or state changes. This will not fire if shouldComponentUpdate() returns false.
"componentWillUnmount": It will be used to cancel any outgoing network requests, or remove all event listeners associated with the component. 
*/

import { Component } from 'react';
import CLM_functionalComp from './CLM_functionalComp';
import CLM_classComp from './CLM_classComp';

export default class Comp_LifecycleMethods extends Component {
	// 1st lifecycle Method that runs on every render, before page load.
	constructor() {
		super();
		this.state = {
			classCount: 0,
			FunctionalCount: 0,
		};
		console.log('Constructor method: 👷');
	}

	// after constructor() --> getDerivedStateFromProps() --> render() --> React updates dom and refs --> componentDidMount() that runs after page load to render components
	componentDidMount() {
		console.log('Comp_LifecycleMethods ComponentDidMount: 👍');
	}

	handleClassIncrement() {
		this.setState({ ...this.state, classCount: this.state.classCount + 1 });
	}

	handleFunctionalIncrement() {
		this.setState({ ...this.state, FunctionalCount: this.state.FunctionalCount + 1 });
	}

	// in "render phase" we have render method which is also a lifecycleMethod that is pure and has no side effects. May be paused, aborted or restarted by React.
	// while updating component, immediately after render method getSnapshotBeforeUpdate() method is called and then DOM is finally committed by react.
	render() {
		return (
			<>
				{/* using another component that will render & update counter value */}
				<div>
					<CLM_classComp num={this.state.classCount} />
					&nbsp;
					<CLM_functionalComp num={this.state.FunctionalCount} />
				</div>
				{/* have to use .bind(this) method to bind this to global scope functions OR else use arrow functions like ()=>{this.handleIncrement()}*/}
				<button onClick={this.handleClassIncrement.bind(this)}>Class Comp</button>
				&nbsp;
				<button onClick={() => this.handleFunctionalIncrement()}>Functional Comp</button>
			</>
		);
	}
}
