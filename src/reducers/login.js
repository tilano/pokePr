import {handleActions} from 'redux-actions';
import {
  handleLogin,
  handleLoading,
  handleApiError,
  handleResetLogin,
} from './../actions/login';

const defaultState = {
  login: {
    login: false,
    counter: 0,
  },
};
export default handleActions(
  {
    [handleLoading]: (state, action) => {
      return Object.assign({}, state, {loading: true});
    },
    [handleLogin]: (state, action) => {
      //return { ...state, login: action.payload, loading: false };
      return Object.assign({}, state, {
        login: action.payload,
        loading: false,
        error: false,
      });
    },
    [handleApiError]: (state, action) => {
      return Object.assign({}, state, {error: 500, loading: false});
    },

    [handleResetLogin]: () => {
      return defaultState;
    },
  },
  defaultState,
);
