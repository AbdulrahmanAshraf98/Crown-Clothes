import { createActions } from "../../Utlitize/Reducer/reducer.utils";
import { USER_ACTIONS_TYPES } from "./userTypes";

export const setCurrentUser = (user) =>
	createActions(USER_ACTIONS_TYPES.SET_CURRENT_USER, user);
