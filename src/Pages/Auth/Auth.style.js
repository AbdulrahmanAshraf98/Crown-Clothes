import styled from "styled-components";

export const AuthContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 3vw;
	margin: 30px auto;
	justify-content: center;
	.auth-container__form-switch {
		width: 80%;
	}
	@media screen and (max-width: 800px) {
		justify-content: flex-start;
		.auth-container__form-switch {
			justify-content: flex-start;
		}
	}
`;
