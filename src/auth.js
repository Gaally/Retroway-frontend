import axios from "axios";
import { authHeader } from "./api";

//Base URL
const api = "http://localhost:8080/api/";

const signup = "auth/signup/";
const signin = "auth/signin/";

// User
const userboard = "test/user";
const adminboard = "test/admin";

// Axios

export const login = (username, password) => {
	return axios.post(api + signin, { username, password }).then((response) => {
		if (response.data.accessToken) {
			localStorage.setItem("user", JSON.stringify(response.data));
		}
		return response.data;
	});
};

export const logout = () => {
	localStorage.removeItem("user");
};

export const register = (firstName, lastName, username, email, password) => {
	return axios.post(api + signup, {
		firstName,
		lastName,
		username,
		email,
		password,
	});
};

export const getUserBoard = () => {
	return axios.get(api + userboard, { headers: authHeader() });
};

export const getAdminBoard = () => {
	return axios.get(api + adminboard, { headers: authHeader() });
};
