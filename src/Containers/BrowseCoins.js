import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

import FetchCoinData from './../Actions/FetchCoinData';
import CoinCard from '../Components/CoinCard';

class BrowseCoins extends Component {
  static navigationOptions = {
    drawerLabel: 'Browse Coins',
    drawerIcon: () => (
      <Image
        source={{uri: `https://dummyimage.com/60x60/000/fff.jpg&text=BrowseCoins`}}
        style={{width: 30, height: 30, borderRadius: 15}}
      />
    )
  }

    componentWillMount() {
        this.props.FetchCoinData();
    }

    renderCoinCards() {
        const { crypto } = this.props;
        return crypto.data.map((coin, index) =>
          <CoinCard
              key={index}
              coin_name={coin.name}
              symbol={coin.symbol}
              price_usd={coin.price_usd}
              percent_change_24h={coin.percent_change_24h}
              percent_change_7d={coin.percent_change_7d}
          />
        )
    }


    render() {

        const { crypto } = this.props;
        const { contentContainer } = styles;

        if (crypto.isFetching) {
            return (
              <View>
                  <Spinner
                      visible={crypto.isFetching}
                      textContent={"Loading..."}
                      textStyle={{color: '#253145'}}
                      animation="fade"
                  />
              </View>
            )
        }

        return (
            <ScrollView contentContainerStyle={contentContainer}>
              {this.renderCoinCards()}
            </ScrollView>
        )


    }
}

function mapStateToProps(state) {
    return {
      crypto: state.crypto
    }
}

export default connect(mapStateToProps, { FetchCoinData })(BrowseCoins)



const styles = StyleSheet.create({
  contentContainer: {
      paddingBottom: 100,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
