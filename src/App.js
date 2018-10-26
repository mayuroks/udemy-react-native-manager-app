import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import LoginForm from './components/LoginForm';

class App extends Component {

  componentWillMount() {
    const config = {
      apiKey: "AIzaSyAunWM1NXNC_krCIak0y_r3uyBYKbe7ckU",
      authDomain: "myauth-4d294.firebaseapp.com",
      databaseURL: "https://myauth-4d294.firebaseio.com",
      projectId: "myauth-4d294",
      storageBucket: "myauth-4d294.appspot.com",
      messagingSenderId: "406399435999"
    };

    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))

    return(
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;