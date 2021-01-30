import { user_type } from './../../types/types';
import { Authorization } from '../epics/auth_types';
import { REHYDRATE } from 'redux-persist';
export const AUTH_START   = 'USER/AUTH'
export const AUTH_SUCCESS = 'USER/AUTH_SUCCESS'
export const AUTH_ERROR   = 'USER/AUTH_SUCCESS_ERROR'

export const AUTH_CANCEL  = 'USER/AUTH_CANCEL'

export const LOGOUT   = 'USER/LOGOUT'

export const INIT         = 'USER/INIT'

export interface Init {
  type: typeof INIT
}
export interface AuthAction {
  type: typeof AUTH_START
  payload: user_type
}
export interface AuthSuccessAction {
  type: typeof AUTH_SUCCESS
  payload: Authorization.responseType
}
export interface Rehydrate {
  type: typeof REHYDRATE
}
export interface AuthErrorAction {
  type: typeof AUTH_ERROR
  payload: string
}
export interface AuthCancelAction {
  type: typeof AUTH_CANCEL
}

export interface LogoutAction {
  type: typeof LOGOUT
}



