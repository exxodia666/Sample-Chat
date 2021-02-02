import { EMIT, CONNECT, DISCONNECT } from './../actions/chat_action_types';
import { RECEIVE } from "../actions/chat_action_types"

enum direction {
    receive = '->',
    send = '<-'
}

type message = {
    text: string
    direction: direction
}

type chat_type = {
    chat_name: string
    messages: message[]
}

type initialtype = {
    chats: chat_type[]
}

const initialState: initialtype = {
    chats: [
        {
            chat_name: '',
            messages: [
                {
                    direction: direction.receive,
                    text: ''
                },
                {
                    direction: direction.send,
                    text: ''
                }
            ]
        },
    ]
}

const chat_reducer = (state: any = initialState, action: any) => {
    console.log(`ACTION: ${action.type}`)
    switch (action.type) {
        case RECEIVE:
            
            return state
        case EMIT:
            return state;
        case CONNECT:
            return state;
        case DISCONNECT:
            return state;
        // case SEND_USER_ERROR_USER_IS:
        //     console.log("USER ISSET")
        //     return {
        //         ...initialState,
        //         status: 'error',
        //         error: 'User isset'
        //     }
        // case SEND_USER_DATA_PENDING:
        //     console.log("PENDING")
        //     return { ...initialState, status: 'pending', }
        // case SEND_USER_CANCEL:
        //     return {
        //         ...initialState,
        //         status: 'idle'
        //     }
        // // case SEND_USER_DATA:
        // //     return {
        // //         ...state,
        // //     }
        // case SEND_USER_SUCCESS:
        //     console.log("SUCCESS")
        //     return { ...initialState, status: 'success' }

        // case SEND_USER_ERROR:
        //     console.log('SEND ERROR')
        //     console.log(action.payload)
        //     return {
        //         ...initialState,
        //         status: 'error',
        //         error: action.payload,
        //     }
        default:
            return state
    }
}
export default chat_reducer;