"use client";
import "../../assets/popover.css";
import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

// Popover component
export default function Popover({ children, showPopover, onClose }) {
	
	const popoverRef = useRef(null);

	useEffect(() => {
		if (showPopover) {
			document.body.style.overflow = "hidden"; // Prevent scrolling
		} else {
			document.body.style.overflow = "auto"; // Allow scrolling
		}
	},[showPopover]);

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

	return createPortal(
		<div className="popover-background">
			<div ref={popoverRef} className="popover" >
				{children}
			</div>
		</div>,
		document.getElementsByClassName('nhd-app-body')[0] // Render in the body
	);
}