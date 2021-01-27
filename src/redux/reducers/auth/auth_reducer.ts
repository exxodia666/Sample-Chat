import { SEND_REQ_SUCCESS, SEND_REQ_REJECTED } from './../../actions/auth/auth_action_types';

const initialState = {
    status: 'idle',
    data: {

    } 
}
const auth_reducer = (state: any = initialState, action: any) => {

    switch (action.type) {
        case SEND_REQ_SUCCESS: 
            return {
                status: 'completed',
                data: {...action.payload}
            }
            case SEND_REQ_REJECTED:
                return {...state}
        default:
            return state
    }
}
export default auth_reducer