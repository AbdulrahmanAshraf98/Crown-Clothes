import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import CartContext from "../../Store/Context/Cart/CartContext";
import CartItem from "../CartItem/CartItem";
import Button from "../Ui/Button/Button";

import {
	CartDropdownContainer,
	CartItems,
	EmptyMessage,
} from "./CartDropdown.style";
function CartDropdown() {
	const cartContext = useContext(CartContext);
	const navigate = useNavigate();
	const goToCheckOut = () => navigate("/Checkout");
	return (
		<CartDropdownContainer>
			<CartItems>
				{cartContext.cartItems.length > 0 &&
					cartContext.cartItems.map((item) => (
						<CartItem cartItem={item} key={item.id} />
					))}
				{cartContext.cartItems.length === 0 && (
					<EmptyMessage>Your Cart Is Empty</EmptyMessage>
				)}
			</CartItems>
			<Button onClick={goToCheckOut}>GO TO CHECKOUT</Button>
		</CartDropdownContainer>
	);
}

export default CartDropdown;
