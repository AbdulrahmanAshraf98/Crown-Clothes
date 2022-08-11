import React from "react";
import {
	FormInputContainer,
	FormInputLabel,
	GroupContainer,
} from "./Input.style";

const Input = ({ label, value, ...otherProps }) => {
	return (
		<GroupContainer className="group ">
			<FormInputContainer
				className="form-input"
				value={value}
				{...otherProps}
			/>
			{label && <FormInputLabel shrink={value.length}>{label}</FormInputLabel>}
		</GroupContainer>
	);
};
export default Input;
