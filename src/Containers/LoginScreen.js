import React from 'react'
import { StyleSheet, Text, View, Image, Button } from 'react-native'

import Login from './InputText'

export default class LoginScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.header}
          source={require('./../Assets/img/stockr.png')}
        />

        <Login />

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00E676',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    color: 'white',
    fontSize: 30,
  },
  header: {
      marginTop: 20,
      width: 180,
      height: 40,
  }
})
