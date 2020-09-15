import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, Platform} from 'react-native';

import {NativeRouter, Route, AndroidBackButton} from 'react-router-native';
import {loginUser as loginUserAction} from '../src/actions/login';

import Login from './containers/login';
import Contador from './components/Contador';
import Register from './components/Register';
import Pokemon from './containers/Pokemon';
import Details from './containers/detailPokemon';
//-----------------------

class Routes extends Component {
  render() {
    const {logged} = this.props;
    const routes = (
      <View style={{width: '100%', height: '100%'}}>
        <Route exact path="/" component={Pokemon} />
        <Route exact path="/Register" component={Register} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/Pokemon" component={Pokemon} />
        <Route exact path="/Details" component={Details} />
      </View>
    );

    if (Platform.OS === 'ios') {
      return <NativeRouter>{routes}</NativeRouter>;
    } else {
      return (
        <NativeRouter>
          <AndroidBackButton>{routes}</AndroidBackButton>
        </NativeRouter>
      );
    }
  }
}

const mapStateToProps = (state) => ({
  logged: state.login,
});

const mapDispatchToProps = {
  loginUser: loginUserAction,
};
export default connect(mapStateToProps, mapDispatchToProps)(Routes);
