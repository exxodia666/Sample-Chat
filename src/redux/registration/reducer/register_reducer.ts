import {
    SEND_USER_CANCEL, 
    SEND_USER_ERROR_USER_IS
} from '../actions/register_types';
import {
    SEND_USER_DATA_PENDING,
    SEND_USER_ERROR,
    SEND_USER_SUCCESS
} from "../actions/register_types"

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
            return {
                ...initialState,
                status: 'error',
                error: 'User isset'
            }
        case SEND_USER_DATA_PENDING:
            console.log("PENDING")
            return { ...initialState, status: 'pending', }
        case SEND_USER_CANCEL:
            return {
                ...initialState,
                status: 'idle'
            }
        // case SEND_USER_DATA:
        //     return {
        //         ...state,
        //     }
        case SEND_USER_SUCCESS:
            console.log("SUCCESS")
            return { ...initialState, status: 'success' }

        case SEND_USER_ERROR:
            console.log('SEND ERROR')
            console.log(action.payload)
            return {
                ...initialState,
                status: 'error',
                error: action.payload,
            }
        default:
            return state
    }
}
export default register_reducer;