import { Init, INIT, Rehydrate, LOGOUT, LogoutAction } from './../actions/auth_action_types';
import { status } from '../../constants/constants';
import {
    AUTH_SUCCESS,
    AUTH_ERROR,
    AUTH_CANCEL,
    AuthAction,
    AuthErrorAction,
    AuthSuccessAction,
    AuthCancelAction,
    AUTH_START
} from '../actions/auth_action_types';
import { SEND_USER_SUCCESS } from '../../registration/actions/register_types';
import { PERSIST, REHYDRATE } from 'redux-persist';
/*
res type "data" : {
 "username": "string",
 "access_token": "Spike", 
 "token_type"  : "bearer",
 } 
*/

type initialType = {
    status: status,
    username: string,
    access_token: string,
    token_type: 'bearer'
    errors: string
}

const initialState: initialType = {
    status: status.idle,
    username: "",
    access_token: "",
    token_type: "bearer",
    errors: ""
}

const auth_reducer = (
    state: initialType = initialState,
    action: AuthAction | AuthErrorAction | AuthSuccessAction | AuthCancelAction | Init | LogoutAction): initialType => {
    switch (action.type) {
        case LOGOUT:
            return {
                ...initialState
            }
        case INIT:
            return {
                ...state,
                status: status.idle
            }
        case AUTH_START || SEND_USER_SUCCESS:
            return {
                ...initialState,
                status: status.pending
            }
        case AUTH_SUCCESS:
            return {
                ...initialState,
                status: status.idle,
                username: action.payload.username,
                access_token: action.payload.access_token,
                token_type: action.payload.token_type,
                errors: ""
            }
        case AUTH_ERROR:
            return {
                ...initialState,
                status: status.error,
                errors: action.payload
            }
        case AUTH_CANCEL:
            return { ...initialState }
        default:
            return state
    }
}
export default auth_reducer