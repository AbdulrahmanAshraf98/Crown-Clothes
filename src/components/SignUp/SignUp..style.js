import styled from "styled-components";

export const SignContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 80%;
	transition: visibility 0.3s linear, transform 1s linear, opacity 0.3s linear;
	visibility: hidden;
	opacity: 0;
	transform: translateX(200%);
	order: 1;
	h2 {
		margin: 10px 0;
	}
	.buttons-container {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
	}

	&.active {
		visibility: visible;
		opacity: 1;
		transform: translateX(0);
		order: 0;
	}
	&.hidden {
		display: none;
	}
	@media screen and (max-width: 800px) {
		width: 90vw;
	}
`;
