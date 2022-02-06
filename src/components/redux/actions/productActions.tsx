import axios from "axios";
import { Dispatch } from "redux";
import * as actionTypes from "../actionTypes/productTypes";

export const getProducts = () => async (dispatch: Dispatch) => {
  try {
    dispatch({
      type: actionTypes.GET_PRODUCTS_REQUEST,
    });
    const { data } = await axios.get("http://localhost:3001/products");
    dispatch({
      type: actionTypes.GET_PRODUCTS_SUCCESS,
      payload: data,
    });
  } catch (error: any) {
    dispatch({
      type: actionTypes.GET_PRODUCTS_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getProductDetails = (id:string) => async (dispatch: Dispatch) => {
  try {
    dispatch({
      type: actionTypes.GET_PRODUCT_DETAILS_REQUEST,
    });
    const { data } = await axios.get(`http://localhost:3001/products/${id}`);
    dispatch({
      type: actionTypes.GET_PRODUCT_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error:any) {
    dispatch({
      type: actionTypes.GET_PRODUCT_DETAILS_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const removeProductDetails = () => (dispatch: Dispatch) => {
  dispatch({
    type: actionTypes.GET_PRODUCT_DETAILS_RESET,
  });
};
