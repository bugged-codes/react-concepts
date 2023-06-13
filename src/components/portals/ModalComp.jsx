// create another DOM node inside "index.html" with id "portal-root",

import { createPortal } from 'react-dom';

const OVERLAY_STYLES = {
	position: 'fixed',
	inset: 0,
	backgroundColor: 'rgba(0, 0, 0, .6)',
	// zIndex: 10,
};
const MODAL_STYLES = {
	position: 'fixed',
	top: '50%',
	left: '50%',
	transform: 'translate(50% 50%)',
	backgroundColor: '#FFF',
	padding: ' 50px',
	zlndex: 1000,
	color: 'black',
};

const ModalComp = ({ isOpen, children, onClose }) => {
	if (!isOpen) {
		return null;
	}
	return createPortal(
		<>
			<div style={OVERLAY_STYLES}></div>
			<div style={MODAL_STYLES}>
				<button onClick={onClose}>Close Modal</button>
				<div>{children}</div>
			</div>
		</>,
		document.getElementById('portal-root')
	);
};
export default ModalComp;
