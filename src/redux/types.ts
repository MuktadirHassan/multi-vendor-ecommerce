export enum authActionTypes {
  LOGIN_SUCCESS = "login/success",
  LOGIN_PENDING = "login/pending",
  LOGIN_FAIL = "login/fail",
  LOGOUT = "logout",
}

interface loginSuccess {
  type: authActionTypes.LOGIN_SUCCESS;
  payload: IAuthUser;
}
interface loginPending {
  type: authActionTypes.LOGIN_PENDING;
}
interface loginError {
  type: authActionTypes.LOGIN_FAIL;
  payload: string;
}
interface logout {
  type: authActionTypes.LOGOUT;
}

export type authActionType = loginSuccess | loginError | loginPending | logout;

// Cart Types
export enum cartActionTypes {
  ADD_TO_CART = "add_to_cart",
  REMOVE_FROM_CART = "remove_from_cart",
  CLEAR_CART = "clear_cart",
}
interface AddTOCart {
  type: cartActionTypes.ADD_TO_CART;
  payload: IProduct;
}
interface RemoveFromCart {
  type: cartActionTypes.REMOVE_FROM_CART;
  payload: string;
}
interface ClearCart {
  type: cartActionTypes.CLEAR_CART;
}

export type cartActionType = AddTOCart | RemoveFromCart | ClearCart;
