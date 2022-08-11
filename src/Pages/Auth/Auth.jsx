import React, { useState } from "react";
import SignIn from "../../components/SignIn/SignIn";
import SignUp from "../../components/SignUp/SignUp";
import Button from "../../components/Ui/Button/Button";
import { AuthContainer } from "./Auth.style";

function Auth() {
	const [activeForm, setActiveForm] = useState("signIn");
	const [hidden, setHidden] = useState("signUp");
	return (
		<AuthContainer className="auth-container">
			<div className="auth-container__form-switch">
				{activeForm === "signIn" ? (
					<Button
						onClick={() => {
							setActiveForm("signUp");
							setTimeout(() => {
								setHidden("signIn");
							}, 300);
							console.log(activeForm);
						}}>
						SignUp
					</Button>
				) : (
					<Button
						onClick={() => {
							setActiveForm("signIn");
							setTimeout(() => {
								setHidden("signUp");
							}, 300);
						}}>
						SignIn
					</Button>
				)}
			</div>

			<SignIn
				active={activeForm === "signIn" && true}
				hidden={hidden === "signIn" && true}
			/>

			<SignUp
				active={activeForm === "signUp" && true}
				hidden={hidden === "signUp" && true}
			/>
		</AuthContainer>
	);
}

export default Auth;
