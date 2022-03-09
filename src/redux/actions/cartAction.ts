// add
import { cartActionTypes } from "redux/types";
// remove
// clear

// { type: "add_To_cart", payload: [] }

export const add_to_cart = (payload: IProduct) => {
  return {
    type: cartActionTypes.ADD_TO_CART,
    payload: payload,
  };
};
export const remove_from_cart = (id: string) => {
  return {
    type: cartActionTypes.REMOVE_FROM_CART,
    payload: id,
  };
};
export const clear_cart = () => {
  return {
    type: cartActionTypes.CLEAR_CART,
  };
};
