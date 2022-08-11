import React, { useState } from "react";
import {
	createAuthUserWithEmailAndPassword,
	createUserDocumentFromAuth,
} from "../../Utlitize/Firebase/Firebase";
import Input from "../Ui/Input/Input";
import Button from "../Ui/Button/Button";
import { SignContainer } from "./SignUp..style";
const defaultFormFields = {
	displayName: "",
	email: "",
	password: "",
	confirmPassword: "",
};
function SignUp({ active, hidden }) {
	const [formFields, setFormFields] = useState(defaultFormFields);
	const resetFormFields = () => setFormFields((prevState) => defaultFormFields);
	const onChangeHandler = (event) => {
		const { name, value } = event.target;
		setFormFields((prevState) => {
			return { ...prevState, [name]: value };
		});
	};
	const onSubmitHandler = async (event) => {
		event.preventDefault();
		const { displayName, email, password, confirmPassword } = formFields;
		event.preventDefault();

		if (
			password.trim() !== confirmPassword.trim() ||
			displayName.trim().length === 0 ||
			email.trim().length === 0
		) {
			return;
		}

		try {
			const response = await createAuthUserWithEmailAndPassword(
				email,
				password,
			);
			const user = response.user;
			await createUserDocumentFromAuth({ ...user, displayName });
			resetFormFields();
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<SignContainer
			className={`sign-up-container ${active ? "active" : ""} ${
				hidden ? "hidden" : ""
			}`}>
			<h2>Don't have an account </h2>
			<span>Sign up with your email and password</span>
			<form onSubmit={onSubmitHandler}>
				<Input
					label="displayName"
					type="text"
					onChange={onChangeHandler}
					value={formFields.displayName}
					name="displayName"
					required
				/>
				<Input
					label="email"
					type="email"
					onChange={onChangeHandler}
					value={formFields.email}
					name="email"
					required
				/>
				<Input
					label="password"
					type="password"
					onChange={onChangeHandler}
					value={formFields.password}
					name="password"
					required
				/>
				<Input
					label="confirmPassword"
					type="password"
					onChange={onChangeHandler}
					value={formFields.confirmPassword}
					name="confirmPassword"
					required
				/>
				<Button type="submit">Sign Up</Button>
			</form>
		</SignContainer>
	);
}

export default SignUp;
