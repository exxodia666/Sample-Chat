import {user_input_type, CheckPasswordsActionTypes, CHECK_PASSWORDS, CHECK_PASSWORDS_ERROR, CHECK_PASSWORDS_SUCCESS, RegisterActionTypes, SEND_USER_DATA, user_type, SEND_USER_ERROR } from "./register_types";

export const SendData = (user: user_type): RegisterActionTypes => ({
    type: SEND_USER_DATA,
    payload: user //todo types for this
})

export const SendDataSuccess = (data: any): RegisterActionTypes=> ({
    type: SEND_USER_ERROR,
    payload: data //todo types for this
})
//todo errors type
export const SendDataError = (errors: any): RegisterActionTypes => {
    console.log(errors)    
    return {
        type: SEND_USER_ERROR,
        payload: errors //todo types for this
    }
}

export const CheckPasswords = (data: user_input_type): CheckPasswordsActionTypes => ({
    type: CHECK_PASSWORDS,
    payload: data //todo types for this
})

export const CheckPasswordsSuccess = (payload: user_type): CheckPasswordsActionTypes => ({
    type: CHECK_PASSWORDS_SUCCESS,
    payload
})

///todo
export const CheckPasswordsError = (i: any): CheckPasswordsActionTypes => {
    console.log('action')
    return {
        type: CHECK_PASSWORDS_ERROR,
        payload: i
    }
}