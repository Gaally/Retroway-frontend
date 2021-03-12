//Base URL
const api = process.env.REACT_APP_API;
const products = "products/";
const featured = "featured/";

// Products
export const productsURL = () => `${api}${products}`;
export const featuredURL = () => `${api}${products}${featured}`;
export const productDetailsURL = (id) => `${api}${products}${id}`;
//Searched product
export const searchProductURL = (product_model) =>
	`${api}products?model=${product_model}`;

// Setup headers and token
export const authHeader = () => {
	const user = JSON.parse(localStorage.getItem("user"));

	if (user && user.accessToken) {
		return { Authorization: "Bearer " + user.accessToken };
	} else {
		return {};
	}
};
