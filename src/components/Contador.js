import React, {Component, useState} from 'react';
import {connect} from 'react-redux';
import {loginUser as loginUserAction} from '../actions/login';

import {
  SafeAreaView,
  ScrollView,
  Linking,
  View,
  Alert,
  ActivityIndicator,
  Text,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import Firebase from './../../database/firebase';

import {ContainerLogin, ContainerMiddle, Boxing} from './styles/Login';

class Contador extends Component {
  state = {
    pass: '',
    counter: this.props.logged.login.counter,
  };

  componentDidMount() {}
  userLogout = () => {
    this.props.loginUser(false, null, this.state.counter);
  };

  componentDidUpdate(prevProps, prevState) {}
  onIncrement = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };
  onDecrement = () => {
    this.setState({
      counter: this.state.counter - 1,
    });
  };
  render() {
    const counter = this.state.counter;
    console.log(
      'datos del usuario s',
      this.props.logged.login.res.user.displayName,
    );
    return (
      <View>
        <Text style={styles.counter}>
          Usuario: {this.props.logged.login.res.user.displayName}
        </Text>
        <Text style={styles.counter}>Contador: {counter}</Text>
        <View>
          <TouchableOpacity
            style={styles.floatingButton}
            onPress={this.onIncrement}>
            <Text>+</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.floatingButton}
            onPress={this.onDecrement}>
            <Text>-</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 200,
  },
  floatingButton: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    top: 20,
    right: 15,
    width: 60,
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 100,
    marginLeft: 100,
  },
  counter: {
    fontSize: 25,
    top: 10,
  },
});
const mapStateToProps = (state) => ({
  logged: state.login,
});

const mapDispatchToProps = {
  loginUser: loginUserAction,
};
export default connect(mapStateToProps, mapDispatchToProps)(Contador);
