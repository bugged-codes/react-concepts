// this is a container that will invoke & is parent to actual modal.
// If we try to use modal without createPortal, due to elements positioning modal will not behave as expected

import { useState } from 'react';
import ModalComp from './ModalComp';

const BUTTON_WRAPPER_STYLES = {
	position: 'relative',
	zlndex: 1,
};
const OTHER_CONTENT_STYLES = {
	position: 'relative',
	zlndex: 2,
	backgroundC010r: ' red',
	padding: ' 10px ',
};
const NULLIFY_DEFAULT_CSS = {
	width: '95dvw',
	maxWidth: '100dvw',
};

const ModalContainer = () => {
	// passing states from here to modal
	const [open, setOpen] = useState(false);

	// counter functionality to verify event bubbling, i.e. event transfer from child to parent.
	const [count, setCount] = useState(0);

	const handleClick = () => {
		setCount((pre) => pre + 1);
	};

	return (
		<div style={NULLIFY_DEFAULT_CSS}>
			<div style={BUTTON_WRAPPER_STYLES}>
				<button onClick={() => setOpen(true)}>Open Modal</button>
			</div>
			{/* by giving onClick event here we are accepting any clicks that will happen inside children of this div */}
			<div onClick={handleClick}>
				<ModalComp isOpen={open} onClose={() => setOpen(false)}>
					This is modal
					<br />
					clicking in this box will too increase count
				</ModalComp>
			</div>
			<div style={OTHER_CONTENT_STYLES}>
				<button onClick={handleClick}>increment counter</button>
				Counter = {count}
			</div>
		</div>
	);
};
export default ModalContainer;
