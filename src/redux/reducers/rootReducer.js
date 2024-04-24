import { combineReducers } from "redux";
import userInfoReducer from "./userInfoReducer";
import { authReducer } from "./authReducer";
import sideMenuReducer from "./sideMenuReducer";
import resultDataReducer from "./resultDataReducer";

export const rootReducer = combineReducers({
    userInfo: userInfoReducer,
    auth: authReducer,
    sideMenu: sideMenuReducer,
    resultData: resultDataReducer
})