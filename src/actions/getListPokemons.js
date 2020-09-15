import {createAction} from 'redux-actions';
import {
  HANDLE_LOADING_POKEMONS,
  POKEMONS,
  HANDLE_API_ERROR_POKEMONS,
  RESET_POKEMONS,
} from './../constants/ActionTypes';
import {Request} from './../api/request';
/*getPokemons*/
export const handleLoadingPokemons = createAction(HANDLE_LOADING_POKEMONS);
export const pokemons = createAction(POKEMONS);
export const handleApiErrorPokemons = createAction(HANDLE_API_ERROR_POKEMONS);
export const handleResetPokemons = createAction(RESET_POKEMONS);
export const getPokemons = (params) => async (dispatch, getState) => {
  dispatch(handleLoadingPokemons());
  return Request.getMethod({
    method: 'get',
    url: 'api/v2/pokemon?limit=200',
  })
    .then((response) => {
      if (response.status === 200) {
        dispatch(pokemons(response.data));
      }
      dispatch(pokemons(response.data));
    })
    .catch((error) => {
      dispatch(handleResetPokemons(error));
    });
};
