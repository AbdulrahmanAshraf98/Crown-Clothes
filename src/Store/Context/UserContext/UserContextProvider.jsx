import React, { useEffect, useState } from "react";
import {
	createUserDocumentFromAuth,
	onAuthChangeListener,
} from "../../../Utlitize/Firebase/Firebase";
import UserContext from "./UserContex";

function UserContextProvider({ children }) {
	const [currentUser, setCurrentUser] = useState(null);
	const userContext = {
		currentUser,
		setCurrentUser,
	};
	useEffect(() => {
		const unsubscribe = onAuthChangeListener((user) => {
			if (user) {
				createUserDocumentFromAuth(user);
			}
			setCurrentUser(user);
		});
		return unsubscribe;
	}, []);
	return (
		<UserContext.Provider value={userContext}>{children}</UserContext.Provider>
	);
}

export default UserContextProvider;
