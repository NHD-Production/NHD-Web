import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import "../assets/style/components/popover.css"; // You can style this file to position and style the popover

// Popover component
export default function Popover({ children, showPopover, onClose }) {
	const popoverRef = useRef(null);

	// Close the popover when clicking outside
	useEffect(() => {
		const handleOutsideClick = (event) => {
			if (popoverRef.current && !popoverRef.current.contains(event.target)) {
				onClose();
			}
		};

		// Close on "ESC" key press
		const handleEscKey = (event) => {
			if (event.key === "Escape") {
				onClose();
			}
		};

		document.addEventListener("mousedown", handleOutsideClick);
		document.addEventListener("keydown", handleEscKey);

		return () => {
			document.removeEventListener("mousedown", handleOutsideClick);
			document.removeEventListener("keydown", handleEscKey);
		};
	}, [onClose]);

	if (!showPopover) return null;

	return ReactDOM.createPortal(
		<div className="popover-background">
			<div ref={popoverRef} className="popover" >
				{children}
			</div>
		</div>,
		document.getElementsByClassName('main-view-container')[0] // Render in the body
	);
}