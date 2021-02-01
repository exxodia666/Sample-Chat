import axios from 'axios';
import { Registration } from './register_types';
import { SEND_USER_CANCEL, SendDataAction } from '../actions/register_types';
import {
    SendDataError,
    SendDataSuccess,
    SendDataPending,
    SendDataErrorUserIs
} from '../actions/register_actions';
import { ofType } from "redux-observable";
import { catchError, map, mergeMap, startWith, takeUntil } from "rxjs/operators";
import { SEND_USER_DATA } from "../actions/register_types";
import { of, from, } from 'rxjs';
import { user_is_registered_error } from './constants';
import { user_type } from '../../types/types';
/**
 *  @param data 
 *  Todo fake fetch func for registration 
 *  for sending data in format {
 *  username: string;
 *  password: string;
 *  }
 */
const send_user_data_fake = (data: user_type): Promise<any> => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({});
        //reject({ detail: user_is_registered_error })
    }, 3000)
});
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
        mergeMap((action: SendDataAction) => from(send_user_data_fake(action.payload)).pipe(
            map((response: unknown) => SendDataSuccess(action.payload)),
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