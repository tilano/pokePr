import React, {Component} from 'react';
import {View, Alert, ActivityIndicator, Text} from 'react-native';
import Firebase from './../../database/firebase';

class Register extends Component {
  state = {
    pass: '',
    user: '',
    displayName: '',
    email: '',
    password: '',
    isLoading: false,
    message: '',
    errorMessage: '',
  };

  componentDidMount() {}
  componentDidUpdate(prevProps, prevState) {
    if (this.state.isLoading !== prevState.isLoading) {
      return true;
    }
  }

  updateInputVal = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  };
  registerUser = () => {
    if (this.state.email === '' && this.state.password === '') {
      Alert.alert('Enter details to signup!');
    } else {
      this.setState({
        isLoading: true,
      });
      return Firebase.auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then((res) => {
          res.user.updateProfile({
            displayName: this.state.displayName,
          });
          console.log('User registered successfully!');
          this.setState({
            isLoading: false,
            displayName: '',
            email: '',
            password: '',
            message: 'registro correcto',
          });
        })
        .catch((error) => this.setState({errorMessage: error}));
    }
  };

  componentDidUpdate(prevProps, prevState) {}

  render() {
    if (this.state.isLoading) {
      return (
        <View>
          <ActivityIndicator size="large" color="#9E9E9E" />
        </View>
      );
    }
    return (
      <View>
        <Text style={{paddingLeft: 20, fontSize: 20, color: 'red'}}>dfg</Text>
      </View>
    );
  }
}
export default Register;
