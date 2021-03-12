import axios from "axios";

import {
	productsURL,
	featuredURL,
	productDetailsURL,
	searchProductURL,
} from "../api";

import {
	FETCH_PRODUCTS,
	GET_DETAIL,
	ADD_PRODUCT,
	UPDATE_PRODUCT,
	DELETE_PRODUCT,
	FETCH_SEARCHED,
} from "./actionTypes";

export const loadProducts = () => async (dispatch) => {
	try {
		const fetchProducts = await axios.get(productsURL());
		const featuredProducts = await axios.get(featuredURL());
		dispatch({
			type: FETCH_PRODUCTS,
			payload: {
				products: fetchProducts.data,
				featured: featuredProducts.data,
			},
		});
	} catch (error) {
		console.log(error);
	}
};

export const loadDetail = (id) => async (dispatch) => {
	try {
		const { data } = await axios.get(productDetailsURL());
		dispatch({
			type: GET_DETAIL,
			payload: {
				product: data,
			},
		});
	} catch (error) {
		console.log(error);
	}
};

export const createProduct = (newProduct) => async (dispatch) => {
	try {
		const { data } = await axios.post(productsURL(), newProduct);
		dispatch({
			type: ADD_PRODUCT,
			payload: {
				new: data,
			},
		});
	} catch (error) {
		console.log(error);
	}
};

export const updateProduct = (id, productData) => async (dispatch) => {
	try {
		const { data } = await axios.put(productDetailsURL(id), productData);
		dispatch({
			type: UPDATE_PRODUCT,
			payload: {
				product: data,
			},
		});
	} catch (error) {
		console.log(error);
	}
};

export const deleteProduct = (id) => async (dispatch) => {
	try {
		const { data } = await axios.delete(productDetailsURL(id));
		dispatch({
			type: DELETE_PRODUCT,
			payload: {
				product: data,
			},
		});
	} catch (error) {
		console.log(error);
	}
};

export const fetchSearch = (product_model) => async (dispatch) => {
	try {
		const { data } = await axios.get(searchProductURL(product_model));
		dispatch({
			type: FETCH_SEARCHED,
			payload: {
				searched: data,
			},
		});
	} catch (error) {
		console.log(error);
	}
};
