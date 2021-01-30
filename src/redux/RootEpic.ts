import { combineEpics } from 'redux-observable';
import fetchUserEpic from './authorization/epics/auth_epic';
import checkPasswordEpic from './passwords/epic/check_passwords_epic';
import registrationEpic from './registration/epic/register_epic';

const rootEpic = combineEpics(
  registrationEpic,
  fetchUserEpic,
  checkPasswordEpic
);
export default rootEpic