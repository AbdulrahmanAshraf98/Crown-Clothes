import React from "react";
import { useSelector } from "react-redux";
import CheckoutItem from "../../components/CheckoutItem/CheckoutItem";
import {
	cartTotalSelector,
	SelectCartItems,
} from "../../Store/Cart/cartSelector";

import { CheckoutContainer } from "./Checkout.style";
function Checkout() {
	const cartItems = useSelector(SelectCartItems);
	const cartTotalAmount = useSelector(cartTotalSelector);
	return (
		<CheckoutContainer className="checkout-container">
			<div className="checkout-header">
				<div className="header-block">
					<span>Product</span>
				</div>
				<div className="header-block">
					<span>Description</span>
				</div>
				<div className="header-block">
					<span>Quantity</span>
				</div>
				<div className="header-block">
					<span>Price</span>
				</div>
				<div className="header-block">
					<span>Remove</span>
				</div>
			</div>
			{cartItems.map((cartItem) => {
				return <CheckoutItem key={cartItem.id} cartItem={cartItem} />;
			})}
			<span className="total">total : {cartTotalAmount}</span>
		</CheckoutContainer>
	);
}

export default Checkout;
