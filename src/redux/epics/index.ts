import { combineEpics } from 'redux-observable';
import fetchUserEpic from './auth_epic/auth_epic';
import checkPasswordEpic from './check_passwords_epic/check_passwords_epic';
import registrationEpic from './register_epic/register_epic';

const rootEpic = combineEpics(
  registrationEpic,
  fetchUserEpic,
  checkPasswordEpic
);
export default rootEpic