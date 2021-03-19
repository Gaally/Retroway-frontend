import React from "react";
// Styling & Animation
import styled from "styled-components";
import { motion } from "framer-motion";
import { addToCart } from "../actions/shoppingAction";
// Redux
import { useDispatch, useSelector } from "react-redux";

const ProductDetail = () => {
	const dispatch = useDispatch();
	// Getting data
	const { product } = useSelector((state) => state.products);

	const addItem = (id) => {
		dispatch(addToCart(id));
	};

	return (
		<StyledDetail>
			<img src={product.imageUrl} alt={product.model} />
			<StyledFlex>
				<h3>{product.model}</h3>
				<p>{product.description}</p>
				<p>Price : {product.price} €</p>

				<button onClick={() => addItem(product.id)}>Add to cart</button>
			</StyledFlex>
		</StyledDetail>
	);
};

const StyledDetail = styled.div`
	display: flex;
	padding: 0 3rem;

	h3 {
		font-size: 2rem;
	}

	p {
		font-size: 1.5rem;
	}

	img {
		width: 40%;
		height: 80vh;
		padding: 2rem;
		margin-right: 3rem;
		overflow: hidden;
		object-fit: cover;
	}
`;

const StyledFlex = styled.div`
	padding: 3rem 0;

	button {
		margin: 5rem 1.5rem;
	}
`;

export default ProductDetail;
