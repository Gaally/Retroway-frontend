import axios from "axios";
import { useSelector } from "react-redux";

//Base URL
const api = process.env.REACT_APP_API;
const products = "products/";
const featured = "featured/";
const orders = "orders/";

// Products
export const productsURL = () => `${api}${products}`;
export const featuredURL = () => `${api}${products}${featured}`;
export const productDetailsURL = (id) => `${api}${products}${id}`;
//Searched product
export const searchProductURL = (product_model) =>
	`${api}products?model=${product_model}`;

// Orders

const user = JSON.parse(localStorage.getItem("user"));

const common = axios.create({
	baseURL: api,
	headers: {
		Authorization: "Bearer " + user.accessToken,
		"Content-Type": "application/json",
	},
});

export const ordered = (shipTo, totalCost) => {
	return common.post(orders, {
		shipTo,
		totalCost,
	});
};
