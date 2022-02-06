import { combineReducers } from "redux";
import { cartReducer } from "./reducers/cartReducers";
import { getProductDetailsReducer, getProductsReducer } from "./reducers/productReducers";

export const rootreducers = combineReducers({
  cart: cartReducer,
  getProducts:getProductsReducer,
  getProductDetails: getProductDetailsReducer
});
