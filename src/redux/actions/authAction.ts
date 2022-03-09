import { Dispatch } from "redux";
import { authActionType, authActionTypes } from "redux/types";
import AuthService from "services/Auth.Service";

const login = (payload: ILoginData) => {
  // email, password -> backend
  // verify
  // backend response
  return (dispatch: Dispatch<authActionType>) => {
    dispatch({
      type: authActionTypes.LOGIN_PENDING,
    });
    AuthService.login(payload)
      .then((user) =>
        dispatch({
          type: authActionTypes.LOGIN_SUCCESS,
          payload: user,
        })
      )
      .catch((err) => {
        dispatch({
          type: authActionTypes.LOGIN_FAIL,
          payload: err?.response?.data?.message,
        });
      });
  };
};
export default login;
