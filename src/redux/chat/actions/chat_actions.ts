import { CONNECT, DISCONNECT, RECEIVE, EMIT } from './chat_action_types';

export const Connect = (payload: any) => ({
    type: CONNECT,
    payload
    //todo types
})
export const Disconnect = (payload: any) => ({
    type: DISCONNECT,
    payload
    //todo types
})
export const Receive = (payload: any) => ({
    type: RECEIVE,
    payload
    //todo types
})
export const Emit = (payload: any) => ({
    type: EMIT,
    payload
    //todo types
})