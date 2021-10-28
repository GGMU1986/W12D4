import { postUser, postSession, deleteSession } from '../util/session';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';

const recieveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user
});

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});

export const createNewUser = formUser => dispatch => {
  return postUser(formUser)
    .then(user => dispatch(recieveCurrentUser(user)))  
};

export const loginUser = formUser => dispatch => {
  return postSession(formUser)
    .then(user => dispatch(recieveCurrentUser(user)))
};

export const logoutUser = () => dispatch => {
  return deleteSession()
    .then(() => dispatch(logoutCurrentUser()))
};