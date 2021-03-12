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

const Nav = () => {
	const [showAdminBoard, setShowAdminBoard] = useState(false);

	const { user: currentUser } = useSelector((state) => state.auth);

	const dispatch = useDispatch();
	const clearSearch = () => {
		dispatch({ type: CLEAR_SEARCHED });
	};

	useEffect(() => {
		history.listen((location) => {
			dispatch(clearMessage());
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

	return (
		<StyledNav onClick={clearSearch}>
			<h1>
				<Link to="/">Retroway.</Link>
			</h1>
			<ul>
				<li>
					<Link to="/">home</Link>
				</li>
				<li>
					<Link to="/shop">shop</Link>
				</li>
				<li>
					<Link to="/about">about</Link>
				</li>
				<li>
					<Link to="/contact">contact</Link>
				</li>
				{showAdminBoard && (
					<li>
						<Link to="/admin">
							<img id="account" src={account} alt="account" />
						</Link>
					</li>
				)}
				{currentUser ? (
					<>
						<li>
							<Link to="/account">
								<img id="account" src={account} alt="account" />
							</Link>
						</li>
						<li>
							<a href="/login" onClick={logOut}>
								Log out
							</a>
						</li>
					</>
				) : (
					<li>
						<Link to="/login">
							<img id="account" src={account} alt="account" />
						</Link>
					</li>
				)}
				<li>
					<Link to="/cart">
						<img src={shopping_cart} alt="shopping cart" />
					</Link>
				</li>
			</ul>
		</StyledNav>
	);
};

const StyledNav = styled.nav`
	min-height: 10vh;
	display: flex;
	margin: auto;
	justify-content: space-between;
	align-items: center;
	padding: 1rem 10rem;
	a {
		color: #f5f5fa;
		text-decoration: none;
	}
	ul {
		display: flex;
		list-style: none;
	}
	li {
		padding-left: 5rem;
		position: relative;
	}
	#account {
		padding-left: 10rem;
	}
	h1 {
		font-family: "Neuton", serif;
		font-size: 1.8rem;
		font-weight: lighter;
	}
`;

export default Nav;
