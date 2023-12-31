import axios from "axios";
import {
  LOGIN_ERROR,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGOUT,
} from "./auth.types";
import { hostName } from "../../global";

export const login = (creds) => async (dispatch) => {
  
  dispatch({ type: LOGIN_LOADING });
  try {
    let res = await axios.post(`${hostName}/auth/login`, creds);
    dispatch({ type: LOGIN_SUCCESS, payload: res.data });
    console.log(res.data);
  } catch (e) {
    dispatch({ type: LOGIN_ERROR, payload: e.message });
    alert("login fail")
  }
};

export const logout = () => ({ type: LOGOUT });