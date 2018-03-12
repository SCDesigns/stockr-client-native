import React, { Component } from 'react';
import { StyleSheet, View, StatusBar } from 'react-native'
import { Provider } from 'react-redux';
import createStore from './src/Redux'
import { Header, CryptoContainer } from './src/Components';

const store = createStore()

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View>
        </View>
      </Provider>
    );
  }
}
