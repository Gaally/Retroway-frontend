import axios from "axios";

//Base URL
const api = "http://localhost:8080/api/";

const signup = "auth/signup/";
const signin = "auth/signin/";

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

export const register = (
	firstName,
	lastName,
	username,
	email,
	password,
	address,
	city,
	country,
	postalCode,
) => {
	return axios.post(api + signup, {
		firstName,
		lastName,
		username,
		email,
		password,
		address,
		city,
		country,
		postalCode,
	});
};
