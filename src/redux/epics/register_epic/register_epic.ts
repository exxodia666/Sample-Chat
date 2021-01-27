import { CheckPasswordsActionTypes } from './../../actions/register/register_types';
import { CheckPasswordsError, CheckPasswordsSuccess, SendData, SendDataError, SendDataSuccess } from './../../actions/register/register_actions';
import { ofType } from "redux-observable";
import { ajax } from "rxjs/ajax";
import { catchError, filter, map, mapTo, mergeMap, takeWhile } from "rxjs/operators";
import { CHECK_PASSWORDS, CHECK_PASSWORDS_SUCCESS, RegisterActionTypes, SEND_USER_DATA, SEND_USER_ERROR, SEND_USER_SUCCESS } from "../../actions/register/register_types";
import { check_passwords } from "./check_passwords";
import { of } from 'rxjs';

const registrationEpic = (action$: any) => {
    return action$.pipe(
        ofType(CHECK_PASSWORDS),
            filter((action: any) => check_passwords(action.payload.passwords)),
            map((action: CheckPasswordsActionTypes) => CheckPasswordsSuccess(action.payload)),
            //takeWhile((action: any) => check_passwords(action.payload.passwords)),
            //map((action: CheckPasswordsActionTypes) => CheckPasswordsError(action.payload)),
            // filter((action: any) => !check_passwords(action.payload.passwords)),
            // map((action: CheckPasswordsActionTypes) => CheckPasswordsError(action.payload)),
            // catchError((error) => of(CheckPasswordsError(error))),
        ofType(CHECK_PASSWORDS_SUCCESS),
            map((action: CheckPasswordsActionTypes) => SendData({
                    username: action.payload.user_name, 
                    password : action.payload.passwords[0]
                })
            ),
        ofType(SEND_USER_DATA),
            mergeMap((action: RegisterActionTypes) => {
                //console.log(action)
                return ajax({
                    url: 'urkrsa',
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                      'rxjs-custom-header': 'Rxjs'
                    },
                    body: {
                      rxjs: 'Hello World!'
                    }
                  }).pipe(//todo types
                        map((response: any) => {
                            console.log(response)
                            return SendDataSuccess(response)
                        }),
                        catchError((error: any) => {
                            console.log(error)
                            return of(SendDataError(error))
                        })
                    )
                //todo check passwords here
            }),
        // ofType(SEND_USER_ERROR),
        //     mergeMap((action) => {
        //         console.log(action)
        //         return ajax
        //     }),
        // ofType(SEND_USER_SUCCESS),
        //     mergeMap((action) => {
        //         console.log(action)
        //         return ajax
        //     }),
        
    )
}
export default registrationEpic;
// const fetchUserEpic = (action$: any) => {
//     return action$.pipe(
//         ofType(SEND_REQ),
//         mergeMap((action: ActionTypes) =>
//             ajax.getJSON(`https://api.github.com/users/${action.payload}`).pipe(
//                 map(fetchUserFulfilled),
//                 catchError(error => of({
//                     type: SEND_REQ_REJECTED,
//                     payload: error.xhr.response,
//                     error: true
//                   }))
//             )
//         )
// )};
// export default fetchUserEpic



