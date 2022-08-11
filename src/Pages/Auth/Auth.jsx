import React from "react";
import SignIn from "../../components/SignIn/SignIn";
import SignUp from "../../components/SignUp/SignUp";
import "./Auth.scss";
function Auth() {
	return (
		<div className="auth-container">
			<SignIn />
			<SignUp />
		</div>
	);
}

export default Auth;
