import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';

class CurrencyContainer extends Component {
  render() {
    return (
      <View>
        <Text>Container</Text>
      </View>
    )
  }
}

function mapStateToProps(state) {
  return {
    currency: state.currency
  }
}

export default connect(mapStateToProps)(currencyContainer)
