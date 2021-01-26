import { SEND_REQ_REJECTED } from './../../actions/auth/auth_action_types';
import { ActionTypes, SEND_REQ } from '../../actions/auth/auth_action_types';
import { ajax } from 'rxjs/ajax';
import { ofType } from 'redux-observable';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { fetchUserFulfilled } from '../../actions/auth/auth_actions';
import { of } from 'rxjs';

const fetchUserEpic = (action$: any) => {
    return action$.pipe(
        ofType(SEND_REQ),
        mergeMap((action: ActionTypes) =>
            ajax.getJSON(`https://api.github.com/users/${action.payload}`).pipe(
                map(fetchUserFulfilled),
                catchError(error => of({
                    type: SEND_REQ_REJECTED,
                    payload: error.xhr.response,
                    error: true
                  }))
            )
        )
)};
export default fetchUserEpic