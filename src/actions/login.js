import {createAction} from 'redux-actions';
import {
  HANDLE_LOADING,
  HANDLE_API_ERROR,
  LOGIN,
  RESET_LOGIN,
} from './../constants/ActionTypes';

export const handleLoading = createAction(HANDLE_LOADING);
export const handleApiError = createAction(HANDLE_API_ERROR);
export const handleLogin = createAction(LOGIN);
export const handleResetLogin = createAction(RESET_LOGIN);
export const loginUser = (params, res, counter) => async (dispatch) => {
  dispatch(handleLogin({login: params, res, counter}));
};
