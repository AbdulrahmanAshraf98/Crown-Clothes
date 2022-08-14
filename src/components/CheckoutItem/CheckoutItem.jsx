import React, { useCallback } from "react";
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
	const addItem = useCallback(
		() => dispatch(addItemToCart(cartItem)),
		[cartItem, dispatch],
	);
	const removeItem = useCallback(
		() => dispatch(removeItemFromCart(cartItem.id)),
		[cartItem.id, dispatch],
	);
	const deleteItemHandler = useCallback(
		() => dispatch(deleteItemFromCart(cartItem)),
		[cartItem, dispatch],
	);
	return (
		<CheckoutItemContainer>
			<ImageContainer>
				<img src={cartItem.imageUrl} alt={cartItem.name} />
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
