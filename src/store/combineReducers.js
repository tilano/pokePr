import {combineReducers} from 'redux';
import login from './../reducers/login';
import listPokemons from './../reducers/listPokemons';
import detailPokemons from './../reducers/detailPokemons';

export default combineReducers({
  login,
  listPokemons,
  detailPokemons,
});
