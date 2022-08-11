import { createContext } from "react";

const defaultValue = {
	currentUser: null,
	setCurrentUser: () => {},
};
const UserContext = createContext(defaultValue);
export default UserContext;
