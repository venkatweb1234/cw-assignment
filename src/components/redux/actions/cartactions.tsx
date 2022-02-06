import axios from "axios";
import { Dispatch } from "redux";
import * as actionTypes from "../actionTypes/cartTypes";

export const addToCart =
  (id: string, qty: number) => async (dispatch: Dispatch) => {
    const { data } = await axios.get(`http://localhost:3001/products/${id}`);
    dispatch({
      type: actionTypes.ADD_TO_CART,
      payload: {
        id: data.id,
        title: data.title,
        brand: data.brand,
        price: data.price,
        description: data.description,
        image: data.image,
        quantity:qty,
      },
    });
  };


  export const removeToCart = (id:string) => (dispatch:Dispatch) =>{
      dispatch({
          type:actionTypes.REMOVE_TO_CART,
          payload:id
      })
  }
