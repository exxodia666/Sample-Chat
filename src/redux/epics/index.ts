import { combineEpics } from 'redux-observable';
import fetchUserEpic from './auth_epic/auth_epic';
const rootEpic = combineEpics(
  fetchUserEpic
);
export default rootEpic