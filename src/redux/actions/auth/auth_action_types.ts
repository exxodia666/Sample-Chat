export const SEND_REQ = 'USER/SEND_MESSAGE'
export const SEND_REQ_SUCCESS = 'USER/SEND_MESSAGE_SUCCESS'
export const SEND_REQ_REJECTED = 'USER/SEND_REQ_REJECTED'



interface SendReqAction {
  type: typeof SEND_REQ
  payload: String
}

// interface SendReqSuccess {
//   type: typeof SEND_REQ_SUCCESS
//   payload: 
// }



export type ActionTypes = SendReqAction

