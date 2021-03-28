import axios from "axios";
import { productDetailsURL, ordered } from "../api";

import {
	ADD_TO_CART,
	REMOVE_FROM_CART,
	LOAD_CART,
	ADD_ORDER,
} from "./actionTypes";

export const createOrder = (shipTo, totalCost) => async (dispatch) => {
	try {
		const { data } = await ordered(shipTo, totalCost);
		console.log(data);
		dispatch({
			type: ADD_ORDER,
			payload: {
				neworder: data,
			},
		});
	} catch (error) {
		console.log(error);
	}
};
export const addToCart = (id) => async (dispatch, getState) => {
	const { data } = await axios.get(productDetailsURL(id));

	try {
		dispatch({
			type: ADD_TO_CART,
			payload: {
				cart: data,
			},
		});
	} catch (error) {
		console.log(error);
	}
	localStorage.setItem("cart", JSON.stringify(getState().shopping.cart));
};

export const removeFromCart = (id) => (dispatch, getState) => {
	try {
		dispatch({
			type: REMOVE_FROM_CART,
			payload: {
				cart: id,
			},
		});
	} catch (error) {
		console.log(error);
	}
	localStorage.setItem("cart", JSON.stringify(getState().shopping.cart));
};

export const loadCart = (product) => (dispatch) => {
	try {
		dispatch({
			type: LOAD_CART,
			payload: {
				cart: product,
			},
		});
	} catch (error) {
		console.log(error);
	}
};
