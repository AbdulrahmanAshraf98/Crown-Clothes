import React, { useState } from "react";

import {
	signInAuthUserWithEmailAndPassword,
	signInWithGooglePopup,
} from "../../Utlitize/Firebase/Firebase";
import { SignContainer } from "../SignUp/SignUp..style";
import Button, { buttonTypeClasses } from "../Ui/Button/Button";
import Input from "../Ui/Input/Input";
const defaultFormFields = {
	email: "",
	password: "",
};
function SignIn({ active, hidden }) {
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
		try {
			const response = await signInAuthUserWithEmailAndPassword(
				formFields.email,
				formFields.password,
			);
			resetFormFields();
		} catch (e) {
			console.log(e.message);
		}
	};

	const loginWithGoogleHandler = async () => {
		await signInWithGooglePopup();
	};
	return (
		<SignContainer
			className={`sign-in-container ${active ? "active" : ""} ${
				hidden ? "hidden" : ""
			}`}>
			<h2>Already have an account </h2>
			<span>Sign in with your email and password</span>
			<form onSubmit={onSubmitHandler}>
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

				<div className="buttons-container">
					<Button type="submit">Sign in</Button>
					<Button
						buttonType={buttonTypeClasses.google}
						type="button"
						onClick={loginWithGoogleHandler}>
						Google sign in
					</Button>
				</div>
			</form>
		</SignContainer>
	);
}

export default SignIn;
