import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
} from "../types/authTypes";
import { isLoggedIn } from "../../utils/constants";

const initialState = {
  isLoggedIn: localStorage.getItem(isLoggedIn) === "true",
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
      return {
        ...state,
        isLoggedIn: false,
      };
    case LOGIN_SUCCESS:
      localStorage.setItem(isLoggedIn, true);
      localStorage.setItem("user", JSON.stringify(action.payload));
      return {
        ...state,
        isLoggedIn: true,
      };
    case LOGIN_FAILURE:
      localStorage.removeItem(isLoggedIn);
      localStorage.removeItem("user");
      return {
        ...state,
        isLoggedIn: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
