import {
        SendDataAction, 
        SEND_USER_DATA, 
        user_type, 
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

export const SendData = (user: user_type): SendDataAction => ({
    type: SEND_USER_DATA,
    payload: user //todo types for this
})
export const SendDataPending = (): SendDataActionPending => ({
    type: SEND_USER_DATA_PENDING,
})
export const SendDataCancel = (): SendDataActionCancel => ({
    type: SEND_USER_CANCEL,
})
export const SendDataSuccess = (): SendDataActionSuccess => ({
    type: SEND_USER_SUCCESS,
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
