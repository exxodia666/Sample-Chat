/**
 *  @param data 
 *  Todo fake fetch func for registration 
 *  for sending data in format {
 *  username: string;
 *  password: string;
 *  }
 */

const chatEpic = (action$: any) => {
    return action$.pipe(
        // ofType(SEND_USER_DATA),
        // //todo types  
        // mergeMap((action: SendDataAction) => from(send_user_data_fake(action.payload)).pipe(
        //     map((response: unknown) => SendDataSuccess(action.payload)),
        //     catchError((err: Registration.Errors) => {
        //         if (err.detail === user_is_registered_error) {
        //             return of(SendDataErrorUserIs(err.detail))
        //         }
        //         return of(SendDataError(err.message))
        //     }),
        //     takeUntil(action$.pipe(
        //         ofType(SEND_USER_CANCEL)
        //     )),
        //     startWith(SendDataPending())
        // ),
        // ),
    )
}
export default chatEpic;