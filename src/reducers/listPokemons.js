import {handleActions} from 'redux-actions';
import {
  pokemons,
  handleLoadingPokemons,
  handleApiErrorPokemons,
  handleResetPokemons,
} from '../actions/getListPokemons';

const defaultState = {
  pokemons: {
    results:[]
  },
  loading: false,
};
export default handleActions(
  {
    [handleLoadingPokemons]: (state, action) => {
      return Object.assign({}, state, {loading: true});
    },
    [pokemons]: (state, action) => {
      //return { ...state, login: action.payload, loading: false };
      return Object.assign({}, state, {
        pokemons: action.payload,
        loading: false,
      });
    },
    [handleApiErrorPokemons]: (state, action) => {
      return Object.assign({}, state, {error: 500, loading: false});
    },

    [handleResetPokemons]: () => {
      return defaultState;
    },
  },
  defaultState,
);
