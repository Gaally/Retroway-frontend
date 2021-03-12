import { SET_MESSAGE, CLEAR_MESSAGE } from "../actions/actionTypes";

const initState = {
	message: "",
};

const messageReducer = (state = initState, action) => {
	switch (action.type) {
		case SET_MESSAGE:
			return {
				message: action.payload.message,
			};
		case CLEAR_MESSAGE:
			return {
				message: "",
			};
		default:
			return { ...state };
	}
};

export default messageReducer;
