import { createContext } from "react";

const CartContext = createContext({
	cartItems: [],
	isCartOpen: false,
	addToCartItemsHandler: () => {},
	ToggleCartOpenHandler: () => {},
});
export default CartContext;
