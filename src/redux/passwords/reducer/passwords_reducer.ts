import { user_input_type } from './../../actions/register/register_types';
import { SendDataActionSuccess, SEND_USER_CANCEL, SEND_USER_DATA } from '../../registration/actions/register_types';
import { CheckPasswordsAction, CheckPasswordsActionError, CheckPasswordsActionSuccess, EMPTY_FIELDS_ERROR, EmptyFieldsError } from '../actions/compare_passwords_type';
import { CHECK_PASSWORDS_ERROR, CHECK_PASSWORDS_SUCCESS } from "../actions/compare_passwords_type"
import { SEND_USER_SUCCESS, user_type } from "../../registration/actions/register_types"

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
    action: CheckPasswordsAction | CheckPasswordsActionError | CheckPasswordsActionSuccess | SendDataActionSuccess | EmptyFieldsError): initialType => {
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
            console.log(state)
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