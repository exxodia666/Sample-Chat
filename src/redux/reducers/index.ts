import { combineReducers } from "redux";
import auth_reducer from "./auth/auth_reducer";
import passwords_reducer from "./passwords/passwords_reducer";
import register_reducer from "./register/register_reducer";

const reducers = {
    auth: auth_reducer,
    register: register_reducer,
    passwords: passwords_reducer
}

export default combineReducers(reducers)