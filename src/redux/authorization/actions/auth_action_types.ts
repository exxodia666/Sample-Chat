import { user_type } from './../../types/types';
import { Authorization } from '../epics/auth_types';
export const AUTH_START = 'USER/AUTH'
export const AUTH_SUCCESS = 'USER/AUTH_SUCCESS'
export const AUTH_ERROR = 'USER/AUTH_SUCCESS_ERROR'
export const AUTH_CANCEL = 'USER/AUTH_CANCEL'

export interface AuthAction {
  type: typeof AUTH_START
  payload: user_type
}

export interface AuthSuccessAction {
  type: typeof AUTH_SUCCESS
  payload: Authorization.responseType
}

export interface AuthErrorAction {
  type: typeof AUTH_ERROR
  payload: string
}
export interface AuthCancelAction {
  type: typeof AUTH_CANCEL
}


