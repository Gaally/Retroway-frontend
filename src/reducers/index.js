import { combineReducers } from "redux";
import authReducer from "./authReducer";
import productsReducer from "./productsReducer";
import messageReducer from "./messagesReducer";
import shoppingReducer from "./shoppingReducer";

const rootReducer = combineReducers({
	products: productsReducer,
	auth: authReducer,
	message: messageReducer,
	shopping: shoppingReducer,
});

export default rootReducer;
