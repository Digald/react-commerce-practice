import { combineReducers } from "redux";
import userReducer from "./user/usr.reducer";
import cartReducer from "./cart/cart.reducer";

export default combineReducers({
  user: userReducer,
  cart: cartReducer,
});
