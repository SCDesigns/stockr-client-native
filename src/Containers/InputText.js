import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import Container from '../Components/Forms/Container';
import Button from '../Components/Forms/Button';
import Label from '../Components/Forms/Label';

export default class Login extends Component {
  render() {
    return (
        <ScrollView style={styles.scroll}>
          <Container>
            {/* <Button
            label="Forgot Login/Pass"
            styles={{button: styles.alignRight, label: styles.label}}
            // onPress={this.press.bind(this)}
          /> */}
          </Container>
          <Container>
            <Label text="Username" />
            <TextInput
            style={styles.textInput}
          />
          </Container>
          <Container>
            <Label text="Password" />
            <TextInput
            secureTextEntry={true}
            style={styles.textInput}
          />
          </Container>
          <Container>
            <Button
            styles={{button: styles.transparentButton}}
            // onPress={() =>
            //   navigate('Profile', { name: 'Jane' })
            // }
            >
              <View style={styles.inline}>
                <Icon name="facebook-official" size={25} color="#3B5699" />
                <Text style={[styles.buttonBlueText, styles.buttonBigText]}>  Connect </Text>
                <Text style={styles.buttonBlueText}>with Facebook</Text>
              </View>
            </Button>
          </Container>
          <View style={styles.footer}>
            <Container>
              <Button
              label="Sign In"
              styles={{button: styles.primaryButton, label: styles.buttonWhiteText}}
              onPress={() =>
                navigate('Profile', { name: 'Jane' })
              }
              />
            </Container>
            <Container>
              <Button
              label="Sign Up"
              styles={{button: styles.secondaryButton, label: styles.buttonWhiteText}}
              onPress={() =>
                navigate('Profile', { name: 'Jane' })
              }
              />
            </Container>
          </View>
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scroll: {
     paddingTop: 30,
     flexDirection: 'column'
  },
  label: {
    color: '#0d8898',
    fontSize: 20
  },
  alignRight: {
    alignSelf: 'flex-end'
  },
  textInput: {
    height: 50,
    fontSize: 12,
    width: 300,
    backgroundColor: '#FFF'
  },
  transparentButton: {
    marginTop: 30,
    borderColor: '#3B5699',
    borderWidth: 2
  },
  buttonBlueText: {
    fontSize: 20,
    color: '#3B5699'
  },
  buttonBigText: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  inline: {
    flexDirection: 'row'
  },
  buttonWhiteText: {
    fontSize: 20,
    color: '#FFF',
  },
  buttonBlackText: {
    fontSize: 20,
    color: '#595856'
  },
  primaryButton: {
    backgroundColor: '#04AB5A'
  },
  footer: {
    marginTop: 20
  }
});
