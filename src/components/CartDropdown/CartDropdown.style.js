import styled from "styled-components";
import { BaseButton } from "../Ui/Button/Button.style";

export const CartDropdownContainer = styled.div`
	position: absolute;
	width: 25vw;
	height: 340px;
	display: flex;
	flex-direction: column;
	padding: 20px;
	border: 1px solid black;
	background-color: white;
	top: 90px;
	right: 40px;
	z-index: 5;
	${BaseButton} {
		margin-top: auto;
	}
	@media screen and (max-width: 991px) {
		top: 12%;
		right: 5%;
		width: 40vw;
	}
	@media screen and (max-width: 720px) {
		top: 12%;
		right: 5%;
		width: 70vw;
	}
`;

export const EmptyMessage = styled.span`
	font-size: 18px;
	margin: 50px auto;
`;
export const CartItems = styled.div`
	height: 240px;
	display: flex;
	flex-direction: column;
	overflow: auto;
`;
