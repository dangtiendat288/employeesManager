import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './src/reducers';
import LoginForm from './src/components/LoginForm';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Navigation from './src/Navigation';

var firebaseConfig = {
  apiKey: 'AIzaSyDJ5Ysus2K14o2s5LnZ-gLvEk-HayW9zUE',
  authDomain: 'employeesmanager-f76e3.firebaseapp.com',
  databaseURL:
    'https://employeesmanager-f76e3-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'employeesmanager-f76e3',
  storageBucket: 'employeesmanager-f76e3.appspot.com',
  messagingSenderId: '66472596872',
  appId: '1:66472596872:web:dc79b09c9fd725eb59163d',
};

//Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}

class App extends Component {
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <SafeAreaProvider>
        <Provider store={store}>
          <Navigation />
        </Provider>
      </SafeAreaProvider>
    );
  }
}

export default App;
