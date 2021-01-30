import { combineReducers } from "redux";
import auth_reducer from "./authorization/reducers/auth_reducer";
import passwords_reducer from "./passwords/reducer/passwords_reducer";
import register_reducer from "./registration/reducer/register_reducer";

const reducers = {
    auth: auth_reducer,
    register: register_reducer,
    passwords: passwords_reducer
}

export default combineReducers(reducers)