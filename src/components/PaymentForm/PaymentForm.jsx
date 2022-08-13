import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { cartTotalSelector } from "../../Store/Cart/cartSelector";
import { selectCurrentUser } from "../../Store/User/user.Selector";
import Button from "../Ui/Button/Button";
import { FormContainer, PaymentFormContainer } from "./PaymentForm.style";

function PaymentForm() {
	const stripe = useStripe();
	const elements = useElements();
	const cartTotal = useSelector(cartTotalSelector);
	const currentUser = useSelector(selectCurrentUser);
	const [isProcessingPayment, setIsProcessingPayment] = useState(false);
	const paymentHandler = async (event) => {
		event.preventDefault();
		if (!stripe || !elements) return;
		setIsProcessingPayment(true);
		try {
			const response = await fetch("api/paymentIntent", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ amount: cartTotal }),
			});
			const responseData = await response.json();

			const {
				paymentIntent: { client_secret },
			} = responseData;
			console.log(responseData.paymentIntent, client_secret);
			const paymentResult = await stripe.confirmCardPayment(client_secret, {
				payment_method: {
					card: elements.getElement(CardElement),
					billing_details: {
						name: currentUser ? currentUser.displayName : "Guest",
					},
				},
			});
			setIsProcessingPayment(false);
			if (paymentResult.error) {
				alert(paymentResult.error);
			} else {
				if (paymentResult.paymentIntent.status === "succeeded") {
					alert("payment");
				}
			}
		} catch (e) {
			console.log(e.message);
		}
	};

	return (
		<PaymentFormContainer>
			<FormContainer onSubmit={paymentHandler}>
				<h2>Credit Card Payment:</h2>
				<CardElement />
				<Button disabled={isProcessingPayment}>Pay Now</Button>
			</FormContainer>
		</PaymentFormContainer>
	);
}

export default PaymentForm;
