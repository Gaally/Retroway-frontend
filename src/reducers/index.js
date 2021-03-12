import { combineReducers } from "redux";
import authReducer from "./authReducer";
import productsReducer from "./productsReducer";
import messageReducer from "./messagesReducer";

const rootReducer = combineReducers({
	products: productsReducer,
	auth: authReducer,
	message: messageReducer,
});

export default rootReducer;
