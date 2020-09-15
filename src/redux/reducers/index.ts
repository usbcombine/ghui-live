import { combineReducers } from "redux";
import userinfo from "./userinfo";
import selectedUser from "./selectedUser";

export default combineReducers({ userinfo, selectedUser });
