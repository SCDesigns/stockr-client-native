import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';

import FetchCoinData from './../Actions/FetchCoinData'

class CurrencyContainer extends Component {

  componentDidMount() {
    this.props.FetchCoinData();
  }
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

export default connect(mapStateToProps, { FetchCoinData })(CurrencyContainer)
