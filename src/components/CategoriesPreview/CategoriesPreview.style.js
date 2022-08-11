import { Link } from "react-router-dom";
import styled from "styled-components";

export const CategoryPreviewContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 30px;
`;

export const Title = styled.h2`
	font-size: 28px;
	margin-bottom: 25px;
	a {
		cursor: pointer;
	}
	span {
	}
`;
export const Preview = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 1.5rem 1.5rem;
`;
