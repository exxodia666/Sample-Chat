import { Registration } from "../epic/register_types"

export const SEND_USER_DATA = 'USER/SEND_USER_DATA'
export const SEND_USER_ERROR = 'USER/SEND_USER_ERROR'
export const SEND_USER_SUCCESS = 'USER/SEND_USER_SUCCESS'
export const SEND_USER_ERROR_USER_IS = 'USER/SEND_USER_ERROR_USER_IS'

export const SEND_USER_DATA_PENDING = 'USER/SEND_USER_DATA_PENDING'

export const SEND_USER_CANCEL = 'USER/SEND_USER_CANCEL'

export interface SendDataAction {
    type: typeof SEND_USER_DATA
    payload: user_input_type
}
export interface SendDataActionSuccess {
    type: typeof SEND_USER_SUCCESS
    payload: user_type
}

export interface SendDataActionPending {
    type: typeof SEND_USER_DATA_PENDING
}
export interface SendDataActionCancel {
    type: typeof SEND_USER_CANCEL
}
export interface SendDataActionError {
    type: typeof SEND_USER_ERROR
    payload: string
}
export interface SendDataActionErrorUserIs {
    type: typeof SEND_USER_ERROR_USER_IS
    payload: string
}

