import { login, logout, register } from "../auth";

import {
	REGISTER_SUCCESS,
	REGISTER_FAIL,
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	LOGOUT,
	SET_MESSAGE,
} from "./actionTypes";

export const registerUser = (
	firstName,
	lastName,
	username,
	email,
	password,
) => async (dispatch) => {
	try {
		const { data } = await register(
			firstName,
			lastName,
			username,
			email,
			password,
		);
		dispatch({
			type: REGISTER_SUCCESS,
		});
		dispatch({
			type: SET_MESSAGE,
			payload: data.message,
		});
		return Promise.resolve();
	} catch (error) {
		const message =
			(error.response && error.response.data && error.response.data.message) ||
			error.message ||
			error.toString();

		dispatch({
			type: REGISTER_FAIL,
		});

		dispatch({
			type: SET_MESSAGE,
			payload: message,
		});

		return Promise.reject();
	}
};

export const loginUser = (username, password) => async (dispatch) => {
	try {
		const { data } = await login(username, password);
		dispatch({
			type: LOGIN_SUCCESS,
			payload: { user: data },
		});

		return Promise.resolve();
	} catch (error) {
		const message =
			(error.response && error.response.data && error.response.data.message) ||
			error.message ||
			error.toString();

		dispatch({
			type: LOGIN_FAIL,
		});

		dispatch({
			type: SET_MESSAGE,
			payload: message,
		});

		return Promise.reject();
	}
};

export const logoutUser = () => (dispatch) => {
	logout();

	dispatch({
		type: LOGOUT,
	});
};
