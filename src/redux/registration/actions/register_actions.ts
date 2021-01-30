import { user_input_type } from './../../types/types';
import {
    SendDataAction,
    SEND_USER_DATA,
    SEND_USER_ERROR,
    SEND_USER_CANCEL,
    SEND_USER_DATA_PENDING,
    SEND_USER_SUCCESS,
    SEND_USER_ERROR_USER_IS,
    SendDataActionPending,
    SendDataActionCancel,
    SendDataActionSuccess,
    SendDataActionError,
    SendDataActionErrorUserIs
} from "./register_types";

export const SendData = (user: user_input_type): SendDataAction => ({
    type: SEND_USER_DATA,
    payload: user //todo types for this
})
export const SendDataPending = (): SendDataActionPending => ({
    type: SEND_USER_DATA_PENDING,
})
export const SendDataCancel = (): SendDataActionCancel => ({
    type: SEND_USER_CANCEL,
})
export const SendDataSuccess = (payload: user_input_type): SendDataActionSuccess => ({
    type: SEND_USER_SUCCESS,
    payload
})
//todo errors type
export const SendDataError = (message: string): SendDataActionError => ({
    type: SEND_USER_ERROR,
    payload: message //todo types for this
})
export const SendDataErrorUserIs = (message: string): SendDataActionErrorUserIs => ({
    type: SEND_USER_ERROR_USER_IS,
    payload: message //todo types for this
})
