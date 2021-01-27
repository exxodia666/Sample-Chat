import { CheckPasswordsActionTypes, SEND_USER_CANCEL, SEND_USER_DATA_PENDING } from './../../actions/register/register_types';
import { CheckPasswordsError, CheckPasswordsSuccess, SendData, SendDataError, SendDataSuccess, SendDataPending } from './../../actions/register/register_actions';
import { ofType } from "redux-observable";
import { ajax } from "rxjs/ajax";
import { catchError, filter, map, mapTo, mergeMap, switchMap, takeUntil, takeWhile } from "rxjs/operators";
import { CHECK_PASSWORDS, CHECK_PASSWORDS_SUCCESS, RegisterActionTypes, SEND_USER_DATA, SEND_USER_ERROR, SEND_USER_SUCCESS } from "../../actions/register/register_types";
import { check_passwords } from "./check_passwords";
import { of, iif, from } from 'rxjs';

// ofType(CHECK_PASSWORDS),
// filter((action: any) => check_passwords(action.payload.passwords)),
//map((action: CheckPasswordsActionTypes) => CheckPasswordsSuccess(action.payload)),
//takeWhile((action: any) => check_passwords(action.payload.passwords)),
//map((action: CheckPasswordsActionTypes) => CheckPasswordsError(action.payload)),
// filter((action: any) => !check_passwords(action.payload.passwords)),
// map((action: CheckPasswordsActionTypes) => CheckPasswordsError(action.payload)),
// catchError((error) => of(CheckPasswordsError(error))),


const fetch = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //resolve({kekwas: 'kwk'});
            resolve({error: 'DAUN'})
        }, 3000)
      });
}

const registrationEpic = (action$: any) => action$.pipe(
        ofType(SEND_USER_DATA),
            mergeMap((action: RegisterActionTypes) => {
                return map(() => SendDataPending),
                from(fetch())
                ///ajax.getJSON(`https://api.github.com/users/${action.payload.username}`) 
                        .pipe(//todo types
                        map((response: any) => {
                            console.log(response)
                            return ({
                                type: SEND_USER_SUCCESS,
                                payload: response
                                // console.log(error)
                                // return SendDataError(error)
                            })
                        }),
                        catchError((error: any) => of({
                            type: SEND_USER_ERROR,
                            payload: error
                            // console.log(error)
                            // return SendDataError(error)
                        }))
                    )
                //todo check passwords here
            }),
            takeUntil(action$.pipe(
                ofType(SEND_USER_CANCEL)
              ))
)

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


                //ajax({
                //     url: 'urkrsa',
                //     method: 'POST',
                //     headers: {
                //       'Content-Type': 'application/json',
                //       'rxjs-custom-header': 'Rxjs'
                //     },
                //     body: {
                //       rxjs: 'Hello World!'
                //     }
                //   })
