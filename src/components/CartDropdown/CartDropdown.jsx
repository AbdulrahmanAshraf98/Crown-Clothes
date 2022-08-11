import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { SelectCartItems } from "../../Store/Cart/cartSelector";
import CartItem from "../CartItem/CartItem";
import Button from "../Ui/Button/Button";

import {
	CartDropdownContainer,
	CartItems,
	EmptyMessage,
} from "./CartDropdown.style";
function CartDropdown() {
	const cartItems = useSelector(SelectCartItems);
	const navigate = useNavigate();
	const goToCheckOut = () => navigate("/Checkout");
	return (
		<CartDropdownContainer>
			<CartItems>
				{cartItems.length > 0 &&
					cartItems.map((item) => <CartItem cartItem={item} key={item.id} />)}
				{cartItems.length === 0 && (
					<EmptyMessage>Your Cart Is Empty</EmptyMessage>
				)}
			</CartItems>
			<Button onClick={goToCheckOut}>GO TO CHECKOUT</Button>
		</CartDropdownContainer>
	);
}

export default CartDropdown;
