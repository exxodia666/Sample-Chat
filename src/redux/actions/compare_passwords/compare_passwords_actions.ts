import { user_input_type, user_type } from './../register/register_types';
import { 
    CHECK_PASSWORDS, 
    CHECK_PASSWORDS_SUCCESS, 
    CHECK_PASSWORDS_ERROR,
    EMPTY_FIELDS_ERROR
} from './compare_passwords_type';
/**
 * @param payload
 */
export const CheckPasswords = (payload: user_input_type) => ({
    type: CHECK_PASSWORDS,
    payload
})

export const CheckPasswordsSuccess = (data: user_type) => ({
      type: CHECK_PASSWORDS_SUCCESS,
      payload: data
})
/**
 * message: string
 * @param payload string
 */
export const CheckPasswordsError = (payload: string) => ({
      type: CHECK_PASSWORDS_ERROR,
      payload
})

export const EmptyFieldsError = (payload: number[] | boolean) => ({
    type: EMPTY_FIELDS_ERROR,
    payload
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