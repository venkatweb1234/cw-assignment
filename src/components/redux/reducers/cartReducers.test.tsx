import { cartReducer } from "./cartReducers";
import {
  ADD_TO_CART,
  REMOVE_TO_CART
} from "../actionTypes/cartTypes";
import { rootreducers } from "../rootReducer";
import { createStore } from "redux";

let store = createStore(rootreducers);

const mockCartItems = [
  {
    id: "1",
    title: "Blue Stripe Stoneware Plate",
    brand: "Kiriko",
    price: 40,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at purus pulvinar, placerat turpis ac, interdum metus. In eget massa sed enim hendrerit auctor a eget.",
    image: "blue.jpg",
    quantity: 1,
  },
  {
    id: "2",
    title: "Hand Painted Blue Flat Dish",
    brand: "Kiriko",
    price: 28,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at purus pulvinar, placerat turpis ac, interdum metus. In eget massa sed enim hendrerit auctor a eget arcu. Curabitur ac pharetra nisl, sit amet mattis dolor.",
    image: "hand-painted.jpg",
    quantity: 1,
  },
];
const addCartAction = {
  type: ADD_TO_CART,
  payload: mockCartItems[0],
};
const addCartAction1 = {
  type: ADD_TO_CART,
  payload: mockCartItems[1],
};
describe("post reducer", () => {
  it("should return the initial state", () => {
    const defaultAction = {
      type: "Default",
      payload: "",
    };

    expect(cartReducer({ cartItems: [] }, defaultAction)).toEqual({
      cartItems: [],
    });
  });

  it("should handle ADD_TO_CART", () => {
    expect(cartReducer({ cartItems: [] }, addCartAction)).toEqual({
      cartItems: [mockCartItems[0]],
    });
    store.dispatch(addCartAction);
    expect(store.getState().cart).toEqual({ cartItems: [mockCartItems[0]] });
    store.dispatch(addCartAction1);
    expect(store.getState().cart).toEqual({ cartItems: mockCartItems });
    store.dispatch(addCartAction);
    expect(store.getState().cart).toEqual({ cartItems: mockCartItems });
  });

  it("should handle REMOVE_TO_CART", () => {
    const removeCartAction = {
      type: REMOVE_TO_CART,
      payload: "1",
    };
    // it's empty on purpose because it's just starting to fetch posts
    expect(cartReducer({ cartItems: [] }, removeCartAction)).toEqual({
      cartItems: [],
    });
    store.dispatch(addCartAction);
    store.dispatch(addCartAction1);
    store.dispatch(removeCartAction);
    expect(store.getState().cart).toEqual({ cartItems: [mockCartItems[1]] });
  });
});
