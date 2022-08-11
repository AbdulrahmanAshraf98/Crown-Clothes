import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Auth from "./Pages/Auth/Auth";
import Category from "./Pages/Category/Category";
import Checkout from "./Pages/Checkout/Checkout";
import Home from "./Pages/Home/Home";
import Shop from "./Pages/Shop/Shop";
import CategoriesContextProvider from "./Store/Context/CategoriesContext/CategoriesContextProvider";
function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route index element={<Home />} />
				<Route path="auth" element={<Auth />} />
				<Route path="checkout" element={<Checkout />} />
			</Routes>
			<CategoriesContextProvider>
				<Routes>
					<Route path="shop" element={<Shop />} />
					<Route path="shop/:category" element={<Category />} />
				</Routes>
			</CategoriesContextProvider>
		</>
	);
}

export default App;
