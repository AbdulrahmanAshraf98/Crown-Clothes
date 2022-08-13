import styled from "styled-components";

export const PaymentFormContainer = styled.div`
	height: 300px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;
export const FormContainer = styled.form`
	padding: 2rem 1rem;
	min-width: 500px;
	& > * {
		margin-bottom: 2rem;
	}
`;
