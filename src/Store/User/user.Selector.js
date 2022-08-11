import { useSelector } from "react-redux/es/hooks/useSelector";

export const selectCurrentUser = (state) => {
	return state.user.currentUser;
};
