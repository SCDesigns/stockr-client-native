import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import rootReducer from './src/Redux/';
import AppWithNavigationState from './src/Redux/modules/navigation/AppNavigation';
import { middleware } from './src/Utils/redux';

const store = createStore(
  rootReducer,
  applyMiddleware(middleware),
);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}
