import { user_input_type, user_type } from '../../types/types';
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