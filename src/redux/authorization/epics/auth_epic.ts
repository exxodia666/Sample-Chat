import { AUTH_START } from './../actions/auth_action_types';
import { AuthUserError, AuthUserSuccess } from './../actions/auth_actions';
import { user_type } from './../../types/types';
import { takeUntil } from 'rxjs/operators';
import { AuthAction, AUTH_CANCEL } from '../actions/auth_action_types';
import axios from 'axios';
import { ofType } from 'redux-observable';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { from, of } from 'rxjs';
import { SEND_USER_SUCCESS } from '../../registration/actions/register_types';

/**
 * @param data 
 * Send data in format {
 *  username: string;
 *  password: string;
 *  }
 */
const auth_user = (data: user_type) => {
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

const auth_user_fake = (data: user_type) => {
    const fd = new FormData();
    fd.append('grant_type', 'password');
    fd.append('username', data.username)
    fd.append('password', data.password)

    console.log(fd)
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //reject( { detail: 'Wrong password!' })
            resolve({
                data: {
                    access_token: "Spike",
                    token_type: "bearer"
                }
            });
            //reject({ detail: 'error' })
        }, 3000)
    });
}


const fetchUserEpic = (action$: any, state$: any) => {
    return action$.pipe(
        ofType(AUTH_START, SEND_USER_SUCCESS),
        mergeMap((action: AuthAction) =>
            from(auth_user_fake({ username: action.payload.username, password: action.payload.password })).pipe(
                //console.log(response)
                map((response: unknown) => AuthUserSuccess({ ...response.data, username: action.payload.username })),
                catchError(error => {
                    console.log(error)
                    return of(AuthUserError(error.detail))
                }),
                takeUntil(action$.pipe(
                    ofType(AUTH_CANCEL)
                )),
            )
        )
    )
};
export default fetchUserEpic