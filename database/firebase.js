import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDdnrv7oIRyz1yT7RMneGPbQp_IOm_eGHA',
  authDomain: 'dragoball-e30cc.firebaseapp.com',
  databaseURL: 'https://dragoball-e30cc.firebaseio.com',
  projectId: 'dragoball-e30cc',
  storageBucket: 'dragoball-e30cc.appspot.com',
  messagingSenderId: '151381620447',
  appId: '1:151381620447:web:ac20a6448b31508edc9b6a',
  measurementId: 'G-H15Y34B5Z0',
};

// Initialize Firebase
const Firebase = firebase.initializeApp(firebaseConfig);

export default Firebase;
