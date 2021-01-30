import { SendData } from '../../registration/actions/register_actions';
import { check_empty_fields } from '../../../utils/check_empty_fields';
import { CheckPasswordsAction } from '../actions/compare_passwords_type';
import { ofType } from "redux-observable";
import { of } from "rxjs";
import { switchMap } from "rxjs/operators";
import { CHECK_PASSWORDS } from "../actions/compare_passwords_type";
import { check_passwords } from '../../../utils/check_passwords';
import { CheckPasswordsError, EmptyFieldsError } from '../actions/compare_passwords_actions';

const checkPasswordEpic = (action$: any) => {
    return action$.pipe(
        ofType(CHECK_PASSWORDS),
        switchMap((action: CheckPasswordsAction) => {
            if (!!(check_empty_fields(action.payload))) {
                //check_empty_fields(action.payload)
                return of(EmptyFieldsError(check_empty_fields(action.payload)))
            }
            if (check_passwords([action.payload.password, action.payload.confirmation])) {
                //PASSWORDS EQUAL
                return of(SendData({
                    username: action.payload.user_name,
                    password: action.payload.password,
                    confirmation: action.payload.confirmation
                }))
            }
            //PASSWORDS ARE NOT EQUAL 
            return of(CheckPasswordsError('Passwords are not equal'))
        }),
    )
}
export default checkPasswordEpic;