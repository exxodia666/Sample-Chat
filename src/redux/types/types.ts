export interface Message {
    user: string
    message: string
    timestamp: number
  }
  
  export interface ChatState {
    messages: Message[]
  }

  

  // src/store/system/types.ts

export interface SystemState {
    loggedIn: boolean
    session: string
    userName: string
  }