export const SEND_USER_DATA           = 'USER/SEND_USER_DATA'
export const SEND_USER_ERROR          = 'USER/SEND_USER_ERROR'
export const SEND_USER_SUCCESS        = 'USER/SEND_USER_SUCCESS'

export const CHECK_PASSWORDS          = 'USER/CHECK_PASSWORDS'
export const CHECK_PASSWORDS_SUCCESS  = 'USER/CHECK_PASSWORDS_SUCCESS'
export const CHECK_PASSWORDS_ERROR    = 'USER/CHECK_PASSWORDS_ERROR'

export type user_input_type = {
    user_name: string,
    passwords: string[]

}


export type user_type = {
    username: string,
    password: string
}

interface SendDataAction {
  type: typeof SEND_USER_DATA
  payload: user_type //todo types for this
}
interface SendDataActionSuccess {
    type: typeof SEND_USER_SUCCESS
    payload: any//todo type for this
}
interface SendDataActionError {
    type: typeof SEND_USER_ERROR
    payload: any//todo types for this
}
interface CheckPasswordsAction {
    type: typeof CHECK_PASSWORDS
    payload: user_input_type
}
interface CheckPasswordsActionSuccess {
      type: typeof CHECK_PASSWORDS_SUCCESS
      payload: user_type
} 
interface CheckPasswordsActionError {
      type: typeof CHECK_PASSWORDS_ERROR
      payload: any
}
export type RegisterActionTypes = SendDataAction | 
                                  SendDataActionError | 
                                  SendDataActionSuccess
export type CheckPasswordsActionTypes = CheckPasswordsAction | 
                                        CheckPasswordsActionError | 
                                        CheckPasswordsActionSuccess


