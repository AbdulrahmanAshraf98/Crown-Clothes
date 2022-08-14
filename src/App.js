import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Auth from "./Pages/Auth/Auth";
import Shop from "./Pages/Shop/Shop";
import Checkout from "./Pages/Checkout/Checkout";

import { setCurrentUser } from "./Store/User/user.Actions";
import {
	createUserDocumentFromAuth,
	onAuthChangeListener,
} from "./Utlitize/Firebase/Firebase";

function App() {
	const dispatch = useDispatch();
	useEffect(() => {
		const unsubscribe = onAuthChangeListener((user) => {
			if (user) {
				createUserDocumentFromAuth(user);
			}
			dispatch(setCurrentUser(user));
		});
		return unsubscribe;
	}, [dispatch]);
	return (
		<>
			<Navbar />
			<Routes>
				<Route index path="/" element={<Home />} />
				<Route path="auth" element={<Auth />} />
				<Route path="checkout" element={<Checkout />} />
				<Route path="/shop/*" element={<Shop />} />
			</Routes>
		</>
	);
}

export default App;
