import { SendDataAction, SendDataActionCancel } from './../../registration/actions/register_types';
import {
    SendDataActionSuccess,
    SEND_USER_CANCEL,
    SEND_USER_DATA
} from '../../registration/actions/register_types';
import {
    CheckPasswordsAction,
    CheckPasswordsActionError,
    CheckPasswordsActionSuccess,
    EmptyFieldsActionError,
    EMPTY_FIELDS_ERROR
} from '../actions/compare_passwords_type';
import { CHECK_PASSWORDS_ERROR } from "../actions/compare_passwords_type"
import { SEND_USER_SUCCESS } from "../../registration/actions/register_types"
import { user_input_type } from '../../types/types';

//todo types for this
type initialType = {
    user: user_input_type
    error: string
}

const initialState: initialType = {
    user: {
        username: '',
        password: '',
        confirmation: ''
    },
    error: '',
}
const passwords_reducer = (state: initialType = initialState,
    action: CheckPasswordsAction | CheckPasswordsActionError | CheckPasswordsActionSuccess | SendDataActionSuccess | EmptyFieldsActionError | SendDataAction | SendDataActionCancel): initialType => {
    console.log(`ACTION: ${action.type}`)
    switch (action.type) {
        case SEND_USER_DATA:
            return {
                ...initialState,
                user: {
                    username: action.payload.username,
                    password: action.payload.password,
                    confirmation: action.payload.confirmation
                },
                error: ''
            }
        case CHECK_PASSWORDS_ERROR:
            return {
                ...state,
                error: 'Passwords are not equal',
            }
        case EMPTY_FIELDS_ERROR:
            return {
                ...state,
                error: String(action.payload)
            }
        case SEND_USER_SUCCESS:
            return {
                ...initialState
            }
        case SEND_USER_CANCEL:
            return {
                ...state,
            }
        // case SEND_USER_SUCCESS:
        //         return {...initialState}
        default:
            return state
    }
}
export default passwords_reducer;