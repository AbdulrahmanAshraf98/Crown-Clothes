import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
export const Navigation = styled.div`
	height: 70px;
	width: 100%;
	display: flex;
	justify-content: space-between;
	margin-bottom: 25px;
`;
export const LogoContainer = styled(Link)`
	height: 100%;
	width: 70px;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 25px;
`;
export const NavLinkContainer = styled.div`
	width: 50%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: flex-end;
`;

export const OptionLink = styled(NavLink)`
	padding: 10px 15px;
	cursor: pointer;
	&.active {
		color: blue;
	}
`;
