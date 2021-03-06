import { userConstants } from '../_constants';

const user = JSON.parse(localStorage.getItem('user'));

const initialState = user ? { loggedIn: true, user, error: '' } : {};

export function authentication(state = initialState, action) {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        loggingIn: true,
        user: action.user,
      };
    case userConstants.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.user,
      };
    case userConstants.LOGIN_FAILURE:
      return {
        ...state,
        error: action.error,
      };
    case userConstants.LOGOUT:
      return {};
    default:
      return state;
  }
}
