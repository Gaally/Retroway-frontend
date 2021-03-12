import React from "react";
// Styling & Animation
import styled from "styled-components";
import { motion } from "framer-motion";
// Redux
import { useSelector } from "react-redux";

const ProductDetail = () => {
	// Getting data
	const { product } = useSelector((state) => state.products);
	return (
		<div className="detail">
			<img src={product.imageUrl} alt={product.model} />
			<h3>{product.description}</h3>
			<p>Stock : {product.stockQuantity}</p>
		</div>
	);
};

export default ProductDetail;
