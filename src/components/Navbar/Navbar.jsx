import React from "react";
import { useSelector } from "react-redux";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { SelectCartIsOpen } from "../../Store/Cart/cartSelector";
import { selectCurrentUser } from "../../Store/User/user.Selector";
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
	const currentUser = useSelector(selectCurrentUser);

	const carTIsOpen = useSelector(SelectCartIsOpen);
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
					{currentUser && (
						<OptionLink as="div" className="nav-link" onClick={signOutHandler}>
							sign out
						</OptionLink>
					)}
					{!currentUser && <OptionLink to="/auth">sign in</OptionLink>}
					<CartIcon />
				</NavLinkContainer>
				{carTIsOpen && <CartDropdown />}
			</Navigation>
		</>
	);
}

export default Navbar;
