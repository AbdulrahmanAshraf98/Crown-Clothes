import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import CartContext from "../../Store/Context/Cart/CartContext";
import UserContext from "../../Store/Context/UserContext/UserContex";
import { signOutUser } from "../../Utlitize/Firebase/Firebase";
import CartDropdown from "../CartDropdown/CartDropdown";
import CartIcon from "../Ui/CartIcon/CartIcon";
import {
	Navigation,
	LogoContainer,
	NavLinkContainer,
	OptionLink,
} from "./Navbar.style";
function Navbar() {
	const userContext = useContext(UserContext);
	const cartContext = useContext(CartContext);
	const signOutHandler = async (e) => {
		await signOutUser();
	};
	return (
		<>
			<Navigation>
				<LogoContainer to="/">
					<div>
						<Logo></Logo>
					</div>
				</LogoContainer>

				<NavLinkContainer>
					<OptionLink to="/">home</OptionLink>
					<OptionLink to="/shop">shop</OptionLink>
					{userContext.currentUser && (
						<OptionLink as="div" className="nav-link" onClick={signOutHandler}>
							sign out
						</OptionLink>
					)}
					{!userContext.currentUser && (
						<OptionLink to="/auth">sign in</OptionLink>
					)}
					<CartIcon />
				</NavLinkContainer>
				{cartContext.isCartOpen && <CartDropdown />}
			</Navigation>
		</>
	);
}

export default Navbar;
