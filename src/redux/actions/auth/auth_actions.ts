import { SEND_REQ, ActionTypes, SEND_REQ_SUCCESS, SEND_REQ_REJECTED } from './auth_action_types';

export const makeReq = (user_name: String): ActionTypes => {
    return {
        type: SEND_REQ,
        payload: user_name
    }
}

export const fetchUserFulfilled = (payload: any) => { 
    return {
        type: SEND_REQ_SUCCESS, 
        payload 
    }
};

export const fetchUserRejected= (payload: any) => { 
    return {
        type: SEND_REQ_REJECTED, 
        payload 
    }
};



