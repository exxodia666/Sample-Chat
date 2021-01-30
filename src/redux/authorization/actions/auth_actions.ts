import { user_type } from './../../types/types';
//import { requestType } from './../../epics/register_epic/register_types';
import { Authorization } from '../epics/auth_types';
import {
    AUTH_SUCCESS,
    AUTH_ERROR,
    AUTH_CANCEL,
    AuthAction,
    AuthSuccessAction,
    AuthErrorAction,
    AuthCancelAction,
    AUTH_START
} from './auth_action_types';

export const AuthUser = (user: user_type): AuthAction => {
    return {
        type: AUTH_START,
        payload: user
    }
}
export const AuthUserSuccess = (payload: Authorization.responseType): AuthSuccessAction => {
    return {
        type: AUTH_SUCCESS,
        payload
    }
};
export const AuthUserError = (payload: string): AuthErrorAction => {
    return {
        type: AUTH_ERROR,
        payload
    }
};
export const AuthUserCancel = (): AuthCancelAction => {
    return {
        type: AUTH_CANCEL,
    }
};




