import {connect} from 'react-redux';
import {reduxForm, Field} from 'redux-form';
import Pokemon from '../components/Pokemon';
import {getPokemons as getPokemonsAction} from '../actions/getListPokemons';

const mapDispatchToProps = {
  getPokemons: getPokemonsAction,
};
const mapStateToProps = (state, props) => ({
  listPokemons: state.listPokemons,
});

export default reduxForm({form: 'login'})(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Pokemon),
);
