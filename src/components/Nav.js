import React, { useState, useEffect } from "react";

// Actions
import { CLEAR_SEARCHED } from "../actions/actionTypes";
import { clearMessage } from "../actions/messageAction";
import { logoutUser } from "../actions/authAction";

// Helpers
import { history } from "../helpers/history";

// Redux
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import account from "../img/account.svg";
import shopping_cart from "../img/shopping_cart.svg";
import { Link } from "react-router-dom";
import { addToCart } from "../actions/shoppingAction";

const Nav = () => {
	const cartItems = useSelector((state) => state);
	const [showAdminBoard, setShowAdminBoard] = useState(false);
	const [isOpen, setIsOpen] = useState(false);

	const { user: currentUser } = useSelector((state) => state.auth);

	const dispatch = useDispatch();
	const clearSearch = () => {
		dispatch({ type: CLEAR_SEARCHED });
	};

	useEffect(() => {
		history.listen(() => {
			dispatch(clearMessage());
			dispatch(addToCart());
		});
	}, [dispatch]);

	useEffect(() => {
		if (currentUser) {
			setShowAdminBoard(currentUser.roles.includes("ROLE_ADMIN"));
		}
	}, [currentUser]);

	const logOut = () => {
		dispatch(logoutUser());
	};

	const burgerHandler = () => {
		if (!isOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}
		setIsOpen(!isOpen);
	};

	return (
		<StyledNav onClick={clearSearch}>
			<StyledLogo>
				<span>Retroway.</span>
			</StyledLogo>
			<StyledHamburger onClick={burgerHandler}>
				<span />
				<span />
				<span />
			</StyledHamburger>
			<StyledMenu isOpen={isOpen}>
				<StyledMenuLink>
					<Link to="/">home</Link>
				</StyledMenuLink>
				<StyledMenuLink>
					<Link to="/shop">shop</Link>
				</StyledMenuLink>
				<StyledMenuLink>
					<Link to="/about">about</Link>
				</StyledMenuLink>
				<StyledMenuLink>
					<Link to="/contact">contact</Link>
				</StyledMenuLink>
				{showAdminBoard && (
					<StyledMenuLink>
						<Link to="/admin">
							<div className="admin">
								<img src={account} alt="admin" />
							</div>
						</Link>
					</StyledMenuLink>
				)}
				{currentUser ? (
					<>
						<StyledMenuLink>
							<Link to="/account">
								<div className="account">
									<img src={account} alt="account" />
								</div>
							</Link>
						</StyledMenuLink>
						<StyledMenuLink>
							<Link to="/login" onClick={logOut}>
								log out
							</Link>
						</StyledMenuLink>
					</>
				) : (
					<StyledMenuLink>
						<Link to="/login">
							<div className="login">
								<img src={account} alt="login" />
							</div>
						</Link>
					</StyledMenuLink>
				)}
				<StyledMenuLink>
					<Link to="/cart">
						<div className="cart">
							<img src={shopping_cart} alt="shopping cart" /> {cartItems.length}
							<span>{cartItems.length}</span>
						</div>
					</Link>
				</StyledMenuLink>
			</StyledMenu>
		</StyledNav>
	);
};

const StyledNav = styled.nav`
	min-height: 10vh;
	display: flex;
	margin: auto;
	justify-content: space-between;
	align-items: center;
	padding: 0rem 2rem;

	@media (max-width: 768px) {
		flex-wrap: wrap;
	}
`;

const StyledLogo = styled.div`
	font-family: "Neuton", serif;
	font-size: 1.8rem;
	font-weight: lighter;
	padding: 1rem 0;
`;

const StyledMenu = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: relative;

	@media (max-width: 768px) {
		overflow: hidden;
		flex-direction: column;
		max-height: ${({ isOpen }) => (isOpen ? "100vh" : "0")};
		transition: max-height 0.3s ease-in;
		width: 100%;
	}
`;

const StyledHamburger = styled.div`
	display: none;
	flex-direction: column;
	cursor: pointer;
	span {
		height: 2px;
		width: 25px;
		background: #f5f5fa;
		margin-bottom: 0.2rem;
		border-radius: 5px;
	}
	@media (max-width: 768px) {
		display: flex;
		margin-bottom: 0.25rem;
	}
`;

const StyledMenuLink = styled.div`
	padding: 1rem 2rem;
	cursor: pointer;
	transition: all 0.3s ease-in;
	font-size: 1rem;
	a {
		color: #f5f5fa;

		&:hover {
			color: #3a5d9b;
		}
	}
	@media (max-width: 768px) {
		touch-action: none;
		padding: 1.3rem 0;
		a {
			font-size: 1.5rem;
			font-weight: bold;
		}
		.account {
			img {
				display: none;
			}
			:before {
				content: "account";
			}
		}
		.admin {
			img {
				display: none;
			}
			:before {
				content: "admin";
			}
		}
		.login {
			img {
				display: none;
			}
			:before {
				content: "login";
			}
		}
		.cart {
			img {
				display: none;
			}
			:before {
				content: "cart";
			}
		}
	}
`;

export default Nav;
