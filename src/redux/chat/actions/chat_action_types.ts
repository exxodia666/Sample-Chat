export const CONNECT = 'CHAT/CONNECT';
export const DISCONNECT = 'CHAT/DISCONNECT';

export const RECEIVE = 'CHAT/RECEIVE'
export const EMIT = 'CHAT/EMIT'

// export const CONNECT1 = 'CHAT/CONNECT'
// export const CONNECT3 = 'CHAT/CONNECT'
// export const CONNECT2 = 'CHAT/CONNECT'
// export const CONNECT4 = 'CHAT/CONNECT'



export interface ConnectActionTypes {
    type: typeof CONNECT
    payload: any
    //todo types
}


export interface DisconnectActionTypes {
    type: typeof DISCONNECT
    payload: any
    //todo types
}


export interface ReceiveActionTypes {
    type: typeof RECEIVE
    payload: any
    //todo types
}


export interface EmitActionTypes {
    type: typeof EMIT
    payload: any
    //todo types
}