import { Action, CartProduct } from "../../types";
import * as actionTypes from "../actionTypes/cartTypes";

export const cartReducer = (state = { cartItems:[] }, action: Action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      const item = action.payload;
      const existItem:any = state.cartItems.find(
        (cartItem: CartProduct) => cartItem.id === item.id
      )
      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((cartItem: CartProduct) =>
            cartItem.id === existItem.id ? item : cartItem
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }
    case actionTypes.REMOVE_TO_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem: CartProduct) => cartItem.id !== action.payload
        ),
      };
    default:
      return state;
  }
};
