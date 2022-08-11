import React from "react";

import {
	BaseButton,
	GoogleButton,
	InvertButton,
	RemoveButton,
} from "./Button.style";
export const buttonTypeClasses = {
	base: "base",
	google: "google-sign-in",
	invert: "inverted",
	remove: "remove",
};
const getButton = (buttonType = buttonTypeClasses.base) =>
	({
		[buttonTypeClasses.base]: BaseButton,
		[buttonTypeClasses.google]: GoogleButton,
		[buttonTypeClasses.invert]: InvertButton,
		[buttonTypeClasses.remove]: RemoveButton,
	}[buttonType]);
function Button({ children, buttonType, ...otherProps }) {
	const CustomButton = getButton(buttonType);
	return <CustomButton {...otherProps}>{children}</CustomButton>;
}

export default Button;
