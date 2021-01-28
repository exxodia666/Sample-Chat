import {
        RegisterActionTypes, 
        SEND_USER_DATA, 
        user_type, 
        SEND_USER_ERROR, 
        SEND_USER_CANCEL, 
        SEND_USER_DATA_PENDING, 
        SEND_USER_SUCCESS,
        SEND_USER_ERROR_USER_IS
} from "./register_types";

export const SendData = (user: user_type): RegisterActionTypes => ({
    type: SEND_USER_DATA,
    payload: user //todo types for this
})
export const SendDataPending = (): RegisterActionTypes => ({
    type: SEND_USER_DATA_PENDING,
})
export const SendDataCancel = (): RegisterActionTypes => ({
    type: SEND_USER_CANCEL,
})
export const SendDataSuccess = (data: any): RegisterActionTypes=> ({
    type: SEND_USER_SUCCESS,
    payload: data //todo types for this
})
//todo errors type
export const SendDataError = (message: string): RegisterActionTypes => ({
        type: SEND_USER_ERROR,
        payload: message //todo types for this
})
export const SendDataErrorUserIs = (message: string): RegisterActionTypes => ({
    type: SEND_USER_ERROR_USER_IS,
    payload: message //todo types for this
})

// export const CheckPasswords = (data: user_input_type): CheckPasswordsActionTypes => {
//     console.log(data)
//     return {
//     type: CHECK_PASSWORDS,
//     payload: data //todo types for this
// }}

// export const CheckPasswordsSuccess = (payload: user_type): CheckPasswordsActionTypes => {
//     console.log('SUCCES')
//     return {
//     type: CHECK_PASSWORDS_SUCCESS,
//     payload
// }}

// ///todo
// export const CheckPasswordsError = (error: string): CheckPasswordsActionTypes => {
//     console.log('ERROR')
//     return {
//         type: CHECK_PASSWORDS_ERROR,
//         payload: error
//     }
// }