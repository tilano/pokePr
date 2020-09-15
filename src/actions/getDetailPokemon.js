import {createAction} from 'redux-actions';
import {
  HANDLE_LOADING_POKEMONSD,
  POKEMONSD,
  HANDLE_API_ERROR_POKEMONSD,
  RESET_POKEMONSD,
} from './../constants/ActionTypes';
import {Request} from './../api/request';
/*getPokemons*/
export const handleLoadingPokemonsD = createAction(HANDLE_LOADING_POKEMONSD);
export const pokemonsD = createAction(POKEMONSD);
export const handleApiErrorPokemonsD = createAction(HANDLE_API_ERROR_POKEMONSD);
export const handleResetPokemonsD = createAction(RESET_POKEMONSD);
export const getPokemonsDetail = (params) => async (dispatch, getState) => {
  dispatch(handleLoadingPokemonsD());
  return Request.getMethod({
    method: 'get',
    url: `api/v2/pokemon/${params.pokemon}`,
  })
    .then((response) => {
      if (response.status === 200) {
        dispatch(pokemonsD(response.data));
      }
      dispatch(pokemonsD(response.data));
    })
    .catch((error) => {
      dispatch(handleResetPokemonsD(error));
    });
};
