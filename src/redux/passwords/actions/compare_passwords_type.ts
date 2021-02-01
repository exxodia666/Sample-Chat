import { user_input_type, user_type } from './../../types/types';
export const CHECK_PASSWORDS = 'PASSWORDS/CHECK_PASSWORDS'
export const CHECK_PASSWORDS_SUCCESS = 'PASSWORDS/CHECK_PASSWORDS_SUCCESS'
export const CHECK_PASSWORDS_ERROR = 'PASSWORDS/CHECK_PASSWORDS_ERROR'
export const EMPTY_FIELDS_ERROR = 'PASSWORDS/EMPTY_FIELDS_ERROR'

export interface CheckPasswordsAction {
      type: typeof CHECK_PASSWORDS
      payload: user_input_type
}

export interface CheckPasswordsActionSuccess {
      type: typeof CHECK_PASSWORDS_SUCCESS
      payload: user_type
}

export interface CheckPasswordsActionError {
      type: typeof CHECK_PASSWORDS_ERROR
      payload: string
}

export interface EmptyFieldsActionError {
      type: typeof EMPTY_FIELDS_ERROR
      payload: number[] | boolean
}