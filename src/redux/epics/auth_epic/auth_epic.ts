import { SEND_REQ_REJECTED } from './../../actions/auth/auth_action_types';
import { ActionTypes, SEND_REQ } from '../../actions/auth/auth_action_types';
import { ajax } from 'rxjs/ajax';
import { ofType } from 'redux-observable';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { fetchUserFulfilled } from '../../actions/auth/auth_actions';
import { from, of } from 'rxjs';
import { SEND_USER_DATA, SEND_USER_SUCCESS, user_type } from '../../actions/register/register_types';
import axios from 'axios';
import { act } from 'react-test-renderer';

const AUTH_USER = 'AUTH_USER'

/**
 * @param data 
 * Send data in format {
 *  username: string;
 *  password: string;
 *  }
 */
const auth_user = (data:  user_type) => {
    const fd = new FormData();
    fd.append('grant_type', 'password');
    fd.append('username', data.username)
    fd.append('password', data.password)
    console.log(fd)
    return axios({
        method: 'POST',
        url: 'http://134.249.181.40:7777/token',
        data: fd,
    })
}


const fetchUserEpic = (action$: any, state$: any) => {
    return action$.pipe(
        ofType(SEND_USER_SUCCESS || AUTH_USER),
        mergeMap((action: ActionTypes) =>
            from(auth_user({username: 'Spike', password: '1234'})).pipe(
                map(fetchUserFulfilled),
                catchError(error => {
                console.log(error)
                return of({
                    type: SEND_REQ_REJECTED,
                    payload: error,
                    error: true
                })})
            )
        )
)};
export default fetchUserEpic