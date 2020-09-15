import {handleActions} from 'redux-actions';
import {
  pokemonsD,
  handleLoadingPokemonsD,
  handleApiErrorPokemonsD,
  handleResetPokemonsD,
} from '../actions/getDetailPokemon';

const defaultState = {
  pokemonsDetail: {
    name: '',
    height: '',
    weight: '',
    abilities: [],
    types: [],
  },
  loading: false,
};
export default handleActions(
  {
    [handleLoadingPokemonsD]: (state, action) => {
      return Object.assign({}, state, {loading: true});
    },
    [pokemonsD]: (state, action) => {
      //return { ...state, login: action.payload, loading: false };
      return Object.assign({}, state, {
        pokemonsDetail: action.payload,
        loading: false,
      });
    },
    [handleApiErrorPokemonsD]: (state, action) => {
      return Object.assign({}, state, {error: 500, loading: false});
    },

    [handleResetPokemonsD]: () => {
      return defaultState;
    },
  },
  defaultState,
);
