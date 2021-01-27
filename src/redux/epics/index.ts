import { combineEpics } from 'redux-observable';
import fetchUserEpic from './auth_epic/auth_epic';
import registrationEpic from './register_epic/register_epic';

const rootEpic = combineEpics(
  registrationEpic,
  fetchUserEpic
);
export default rootEpic