import React from "react";
import { Link } from "react-router-dom";
// Styles
import styled from "styled-components";

const CartProduct = ({ product, removeItem }) => {
	return (
		<>
			<StyledCartProduct>
				<Link to={`/${product.id}`}>
					<img src={product.imageUrl} alt="" />
				</Link>
				<p>{product.model}</p>
				<p>{product.price}€</p>
				<button onClick={() => removeItem(product.id)}>Remove</button>
			</StyledCartProduct>
		</>
	);
};

const StyledCartProduct = styled.div`
	display: flex;
	border: solid white 1px;
	padding: 2rem;

	button {
		justify-content: flex-end;
		margin: 0 0 0 8rem;
	}

	img {
		margin-left: 3rem;
		width: 70%;
		height: 20vh;
		object-fit: cover;
	}

	p {
		align-self: center;
		margin: 0 5rem;
	}

	@media (max-width: 900px) {
		flex-direction: column;

		img {
			width: 50%;
			height: 30vh;
			margin: 0;
		}

		button {
			margin: 0;
		}
		p {
			margin: 0;
		}
	}

	@media (max-width: 768px) {
		flex-direction: column;

		img {
			width: 80%;
			height: 30vh;
		}

		button {
			font-size: 1rem;
		}
		p {
			font-size: 1rem;
		}
	}
`;

export default CartProduct;
