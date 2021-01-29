export namespace Registration {
    export type responseType = {
        username: string
        id: string
        membership: []
    }
    export type requestType = {
        username: string
        password: string
    }
    type ErrorUserIsset = {
        detail : string //
        message: string
    }
    /// todo check this
    type ErrorUser = {
        message : string //
        detail: string
    }
    export type Errors = ErrorUser | ErrorUserIsset
}

