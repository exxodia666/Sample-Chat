import { combineReducers } from "redux";
import auth_reducer from "./auth/auth_reducer";

const reducers = {
    auth: auth_reducer
}
export default combineReducers(reducers)