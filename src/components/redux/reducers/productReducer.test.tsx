import {
  getProductsReducer,
  getProductDetailsReducer,
} from "../reducers/productReducers";
import {
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAILURE,
  GET_PRODUCT_DETAILS_REQUEST,
  GET_PRODUCT_DETAILS_SUCCESS,
  GET_PRODUCT_DETAILS_FAILURE,
  GET_PRODUCT_DETAILS_RESET,
} from "../actionTypes/productTypes";
import { rootreducers } from "../rootReducer";
import { createStore } from "redux";

let store = createStore(rootreducers);
const mockProductItems = [
  {
    id: "1",
    title: "Blue Stripe Stoneware Plate",
    brand: "Kiriko",
    price: 40,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at purus pulvinar, placerat turpis ac, interdum metus. In eget massa sed enim hendrerit auctor a eget.",
    image: "blue.jpg",
  },
  {
    id: "2",
    title: "Hand Painted Blue Flat Dish",
    brand: "Kiriko2",
    price: 28,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at purus pulvinar, placerat turpis ac, interdum metus. In eget massa sed enim hendrerit auctor a eget arcu. Curabitur ac pharetra nisl, sit amet mattis dolor.",
    image: "hand-painted.jpg",
  },
];



describe("Product post reducer", () => {
  it("should return the initial state", () => {
    const defaultAction = {
      type: "Default",
      payload: "",
    };

    expect(getProductsReducer({ products: [] }, defaultAction)).toEqual({
      products: [],
    });
  });

  it("should handle GET_PRODUCTS_REQUEST", () => {
    const getProductRequestAction = {
      type: GET_PRODUCTS_REQUEST,
    };
    expect(
      getProductsReducer({ products: [] }, getProductRequestAction)
    ).toEqual({
      loading: true,
      products: [],
    });
  });

  it("should handle GET_PRODUCTS_SUCCESS", () => {
    const getProductSucessAction = {
      type: GET_PRODUCTS_SUCCESS,
      payload:mockProductItems
    };
    expect(
      getProductsReducer({ products: [] }, getProductSucessAction)
    ).toEqual({
      loading: false,
      products: mockProductItems,
    });
  });

  it("should handle GET_PRODUCTS_FAILURE", () => {
    const getProductFailureAction = {
      type: GET_PRODUCTS_FAILURE,
      payload:'Error message'
    };
    expect(
      getProductsReducer({ products: [] }, getProductFailureAction)
    ).toEqual({
      loading: false,
      error:'Error message',
    });
  });
});


describe("Product Details post reducer", () => {
  it("should return the initial state", () => {
    const defaultAction = {
      type: "Default"
    };

    expect(getProductDetailsReducer({ product: {} }, defaultAction)).toEqual({
      product: {},
    });
  });

  it("should handle GET_PRODUCT_DETAILS_REQUEST", () => {
    const getProductdetailsRequestAction = {
      type: GET_PRODUCT_DETAILS_REQUEST,
    };
    expect(
      getProductDetailsReducer({ product: {} }, getProductdetailsRequestAction)
    ).toEqual({
      loading: true,
    });
  });

  it("should handle GET_PRODUCT_DETAILS_SUCCESS", () => {
    const getProductdetailsSucessAction = {
      type: GET_PRODUCT_DETAILS_SUCCESS,
      payload:mockProductItems[0]
    };
    expect(
      getProductDetailsReducer({ product: {} }, getProductdetailsSucessAction)
    ).toEqual({
      loading: false,
      product: mockProductItems[0],
    });
  });

  it("should handle GET_PRODUCTS_FAILURE", () => {
    const getProductdetailFailureAction = {
      type: GET_PRODUCT_DETAILS_FAILURE,
      payload:'Error message'
    };
    expect(
      getProductDetailsReducer({ product: {} }, getProductdetailFailureAction)
    ).toEqual({
      loading: false,
      error:'Error message',
    });
  });
  it("should handle GET_PRODUCT_DETAILS_RESET", () => {
    const getProductdetailResetAction = {
      type: GET_PRODUCT_DETAILS_RESET,
    };
    expect(
      getProductDetailsReducer({ product: {} }, getProductdetailResetAction)
    ).toEqual({
      product: {},
    });
  });

});

