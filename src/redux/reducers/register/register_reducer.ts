import { SEND_USER_DATA, SEND_USER_CANCEL, CHECK_PASSWORDS, CHECK_PASSWORDS_SUCCESS, SEND_USER_ERROR_USER_IS } from './../../actions/register/register_types';
import { 
    CHECK_PASSWORDS_ERROR, 
    SEND_USER_DATA_PENDING, 
    SEND_USER_ERROR, 
    SEND_USER_SUCCESS 
} from "../../actions/register/register_types"

//todo types for this
const initialState = {
    status: 'idle',
    error: '',
    data: {

    } 
}

const register_reducer = (state: any = initialState, action: any) => {
    console.log(`ACTION: ${action.type}`)
    switch (action.type) {
        case SEND_USER_ERROR_USER_IS:
            console.log("USER ISSET")
            return {...state}
        case SEND_USER_DATA_PENDING :
            console.log("PENDING")
            return {...state,  status: 'pending',}
        case SEND_USER_CANCEL:
            return {
                ...state, 
                status: 'idle'
            }
        case SEND_USER_DATA:
            return {
                ...state,
               
            }
        case CHECK_PASSWORDS_SUCCESS: 
            console.log('PASSWORDS SUCESS')
            return {
                status: 'error',
                error: 'Passwords are not equal',
                ...state
            }

        case CHECK_PASSWORDS_ERROR: 
            console.log('PASSWORDS ERROR')
            return {
                status: 'error',
                error: 'Passwords are not equal',
                ...state
            }
        case SEND_USER_SUCCESS:
            console.log("SUCCESS")
                return {...state, status: 'success'}
        case SEND_USER_ERROR:
            console.log('SEND ERROR')
                return {
                    status: 'error',
                    error: action.payload,
                    ...state
                }
        default:
            return state
    }
}
export default register_reducer;