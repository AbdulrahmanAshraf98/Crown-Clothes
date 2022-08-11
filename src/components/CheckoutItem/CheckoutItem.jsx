import React from "react";
import { useDispatch } from "react-redux";
import {
	addItemToCart,
	deleteItemFromCart,
	removeItemFromCart,
} from "../../Store/Cart/cartActions";
import Button, { buttonTypeClasses } from "../Ui/Button/Button";
import {
	CheckoutItemContainer,
	ImageContainer,
	BaseSpan,
	Quantity,
	Arrow,
	Value,
} from "./CheckoutItem.style";
function CheckoutItem({ cartItem }) {
	const dispatch = useDispatch();
	const addItem = () => dispatch(addItemToCart(cartItem));
	const removeItem = () => dispatch(removeItemFromCart(cartItem.id));
	const deleteItemHandler = () => dispatch(deleteItemFromCart(cartItem));
	return (
		<CheckoutItemContainer>
			<ImageContainer>
				<img src={cartItem.imageUrl} />
			</ImageContainer>
			<BaseSpan>{cartItem.name} </BaseSpan>
			<Quantity>
				<Arrow onClick={removeItem}>&#10094;</Arrow>
				<Value>{cartItem.quantity}</Value>
				<Arrow onClick={addItem}>&#10095;</Arrow>
			</Quantity>
			<BaseSpan>{cartItem.price}</BaseSpan>
			<Button buttonType={buttonTypeClasses.remove} onClick={deleteItemHandler}>
				&#10005;
			</Button>
		</CheckoutItemContainer>
	);
}

export default CheckoutItem;
