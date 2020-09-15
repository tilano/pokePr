import React, {Component} from 'react';
import {View, Alert, ActivityIndicator} from 'react-native';
import Firebase from './../../database/firebase';

class Login extends Component {
  state = {
    pass: '',
    user: '',
    displayName: '',
    email: '',
    password: '',
    isLoading: false,
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
          });
        })
        .catch(
          (error) => console.log('data ', error),
          this.setState({errorMessage: error.message}),
        );
    }
  };

  userLogin = () => {
    if (this.state.email === '' && this.state.password === '') {
      Alert.alert('Enter details to signin!');
    } else {
      this.setState({
        isLoading: true,
      });
      console.log(this.state.email, this.state.password);
      return Firebase.auth()
        .signInWithEmailAndPassword(this.state.email, this.state.password)
        .then((res) => {
          console.log(res);
          this.setState({
            isLoading: false,
            email: '',
            password: '',
          });
          console.log('User logged-in successfully!', this.props.login);

          this.props.loginUser(true, res, null);
        })
        .catch((error) => this.setState({errorMessage: error.message}));
    }
  };

  sendInfo = async () => {};

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
        <Text>fff</Text>
      </View>
    );
  }
}
export default Login;
