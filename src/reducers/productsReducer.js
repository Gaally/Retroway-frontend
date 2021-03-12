import {
	FETCH_PRODUCTS,
	GET_DETAIL,
	ADD_PRODUCT,
	UPDATE_PRODUCT,
	DELETE_PRODUCT,
	FETCH_SEARCHED,
	CLEAR_SEARCHED,
} from "../actions/actionTypes";

const initState = {
	products: [],
	product: {},
	new: [],
	featured: [],
	searched: [],
};

const productsReducer = (state = initState, action) => {
	switch (action.type) {
		case FETCH_PRODUCTS:
			return {
				...state,
				products: action.payload.products,
				featured: action.payload.featured,
			};
		case GET_DETAIL:
			return {
				...state,
				product: action.payload.product,
			};
		case ADD_PRODUCT:
			return {
				...state,
				new: action.payload.new,
			};
		case UPDATE_PRODUCT:
			return {
				...state,
				product: action.payload.product,
			};

		case DELETE_PRODUCT:
			return {
				...state,
				product: action.payload.product,
			};

		case FETCH_SEARCHED:
			return {
				...state,
				searched: action.payload.searched,
			};
		case CLEAR_SEARCHED:
			return {
				...state,
				searched: [],
			};
		default:
			return { ...state };
	}
};

export default productsReducer;
