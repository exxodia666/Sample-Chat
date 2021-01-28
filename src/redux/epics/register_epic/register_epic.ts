import axios from 'axios';
import { Registration } from './register_types';
import { SEND_USER_CANCEL, user_type } from './../../actions/register/register_types';
import { SendDataError, SendDataSuccess, SendDataPending, SendDataErrorUserIs } from './../../actions/register/register_actions';
import { ofType } from "redux-observable";
import { catchError, map, mergeMap, startWith, takeUntil } from "rxjs/operators";
import { RegisterActionTypes, SEND_USER_DATA,} from "../../actions/register/register_types";
import { of, from, } from 'rxjs';
import { user_is_registered_error } from './constants';
/**
 * Fake fetch func 
 */
const fetch = (): Promise<any> => {
    send_user_data({username: 'Lopux', password: "12345"})
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //resolve({kekwas: 'kwk'});
            reject({message: 'isset'})
        }, 3000)
      });
}//todo

const send_user_data = (data:  user_type) => {
    const fd = new FormData()
    fd.append('grant_type', 'password');
    fd.append('username', data.username)
    fd.append('password', data.password)
    console.log(fd)
    return axios({
        method: 'POST',
        url: 'url',
        headers: {
        },
        data: {}
    })
}
const registrationEpic = (action$: any ) => {
    return action$.pipe(
        ofType(SEND_USER_DATA),
            //todo types  
            mergeMap((action: RegisterActionTypes) => from(fetch()).pipe( 
                map((response: unknown) => SendDataSuccess(response)),
                        catchError((err: Registration.Errors) => {
                            //todo 
                            if(err.detail === user_is_registered_error) {
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
)}
export default registrationEpic;