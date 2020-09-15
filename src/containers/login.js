import {connect} from 'react-redux';
import {reduxForm, Field} from 'redux-form';
import Login from '../components/login';
import {loginUser as loginUserAction} from '../actions/login';

const mapDispatchToProps = {
  loginUser: loginUserAction,
};
const mapStateToProps = (state, props) => ({
  login: state.login,
});
/*Login = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);

export default reduxForm({
  form: 'login',
})(Login);*/

export default reduxForm({form: 'login'})(
  connect(mapStateToProps, mapDispatchToProps)(Login),
);
