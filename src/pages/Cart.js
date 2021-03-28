import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../actions/shoppingAction";
import { Link } from "react-router-dom";
import CartProduct from "../components/CartProduct";
// Styles
import styled from "styled-components";

const Cart = () => {
	const dispatch = useDispatch();

	useEffect(() => {}, []);

	const removeItem = (id) => {
		dispatch(removeFromCart(id));
	};
	const { cart } = useSelector((state) => state.shopping);

	const cartTotal = parseInt(
		cart.reduce((total, { price = 0 }) => total + price, 0),
	);

	return (
		<>
			{cart.length === 0 ? (
				<StyledEmpty>
					<p>Your Cart is Empty !</p>
					<Link to="/">
						<p>Go Back</p>
					</Link>
				</StyledEmpty>
			) : (
				<StyledCart>
					{cart.map((product) => (
						<CartProduct
							id={product.id}
							imageUrl={product.imageUrl}
							model={product.model}
							price={product.price}
							key={product.id}
							product={product}
							removeItem={removeItem}
						/>
					))}
					<p>Total Cost : {cartTotal} €</p>
					<Link to="/cart/checkout">
						<button>Proceed To Checkout</button>
					</Link>
				</StyledCart>
			)}
		</>
	);
};

const StyledEmpty = styled.div`
	display: flex;
	flex-direction: column;

	padding-top: 5rem;

	p {
		font-size: 3rem;
		font-weight: bold;
		align-self: center;
	}
	a {
		text-decoration: none;
		font-size: 3rem;
		font-weight: bold;
		align-self: center;
		p {
			color: #3a5d9b;
		}
	}
`;

const StyledCart = styled.div`
	margin: 2rem;
	width: 95vw;
	height: 80vh;
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	a,
	button {
		align-self: center;
	}

	@media (max-width: 768px) {
		width: 80vw;
		height: 40vh;
	}
`;

export default Cart;
