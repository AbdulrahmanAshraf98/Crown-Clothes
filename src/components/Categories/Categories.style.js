import styled from "styled-components";

export const CategoriesContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	gap: 1.5rem 1.5rem;
	justify-content: space-between;
`;
