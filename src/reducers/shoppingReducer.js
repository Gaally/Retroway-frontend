import {
	ADD_TO_CART,
	REMOVE_FROM_CART,
	LOAD_CART,
	ADD_ORDER,
} from "../actions/actionTypes";

const initState = {
	cart: JSON.parse(localStorage.getItem("cart")) || [],
	neworder: [],
};

const shoppingReducer = (state = initState, action) => {
	switch (action.type) {
		case ADD_ORDER:
			return {
				...state,
				neworder: action.payload.neworder,
			};
		case ADD_TO_CART:
			return {
				...state,
				cart: [...state.cart, action.payload.cart],
			};
		case REMOVE_FROM_CART:
			return {
				...state,
				cart: state.cart.filter((item) => item.id !== action.payload.cart),
			};
		case LOAD_CART:
			return {
				...state,
				cart: action.payload.cart,
			};
		default:
			return {
				...state,
			};
	}
};

export default shoppingReducer;
