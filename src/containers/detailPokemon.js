import {connect} from 'react-redux';
import {reduxForm, Field} from 'redux-form';
import Details from '../components/detailPokemon';
import {getPokemonsDetail as getPokemonsDetailAction} from '../actions/getDetailPokemon';

const mapDispatchToProps = {
  getPokemonsDetail: getPokemonsDetailAction,
};
const mapStateToProps = (state, props) => ({
  detailPokemons: state.detailPokemons,
});

export default reduxForm({form: 'login'})(
  connect(mapStateToProps, mapDispatchToProps)(Details),
);
