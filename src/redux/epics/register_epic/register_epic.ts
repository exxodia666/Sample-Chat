import axios from 'axios';
import { Registration } from './register_types';
import { SEND_USER_CANCEL, user_type } from './../../actions/register/register_types';
import {
    SendDataError,
    SendDataSuccess,
    SendDataPending,
    SendDataErrorUserIs
} from './../../actions/register/register_actions';
import { ofType } from "redux-observable";
import { catchError, map, mergeMap, startWith, takeUntil } from "rxjs/operators";
import { SEND_USER_DATA } from "../../actions/register/register_types";
import { of, from, } from 'rxjs';
import { user_is_registered_error } from './constants';
/**
 *  @param data 
 *  Todo fake fetch func for registration 
 *  for sending data in format {
 *  username: string;
 *  password: string;
 *  }
 */
const send_user_data_fake = (data: user_type): Promise<any> => {
    //send_user_data({username: 'Lopux', password: "12345"})
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //resolve({kekwas: 'kwk'});
            reject({ detail: user_is_registered_error })
        }, 3000)
    });
}//todo
/**
 * @param data 
 * Send data in format {
 *  username: string;
 *  password: string;
 *  }
 */
const send_user_data = (data: user_type) => {
    return axios({
        method: 'POST',
        url: 'http://134.249.181.40:7777/users/',
        data: data
    })
}
const registrationEpic = (action$: any) => {
    return action$.pipe(
        ofType(SEND_USER_DATA),
        //todo types  
        mergeMap((action: RegisterActionTypes) => from(send_user_data_fake(action.payload)).pipe(
            map((response: unknown) => SendDataSuccess()),
            catchError((err: Registration.Errors) => {
                if (err.detail === user_is_registered_error) {
                    return of(SendDataErrorUserIs(err.detail))
                }
                return of(SendDataError(err.message))
            }),
            takeUntil(action$.pipe(
                ofType(SEND_USER_CANCEL)
            )),
            startWith(SendDataPending())
        ),
        ),
    )
}
export default registrationEpic;