import { 
    CHECK_PASSWORDS_ERROR, 
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
    //console.log(action)
    switch (action.type) {
        case CHECK_PASSWORDS_ERROR: 
            console.log('PASSWORDS ERROR')
            return {
                status: 'error',
                error: 'Passwords are not equal',
                ...state
            }
        case SEND_USER_SUCCESS:
                console.log("SUCCESS")
                return {...state}
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