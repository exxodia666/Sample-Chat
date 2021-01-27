import { combineReducers } from "redux";
import auth_reducer from "./auth/auth_reducer";
import register_reducer from "./register/register_reducer";

const reducers = {
    auth: auth_reducer,
    register: register_reducer
}
export default combineReducers(reducers)