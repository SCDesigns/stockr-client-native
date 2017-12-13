import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, ScrollView } from 'react-native';
import Spinner from ‘react-native-loading-spinner-overlay';

import FetchCoinData from './../Actions/FetchCoinData';
import Card from './Card'


class CurrencyContainer extends Component {

    componentDidMount() {
        this.props.FetchCoinData();
    }

    renderCoinCards() {
        const { currency } = this.props;
        return currency.data.map((coin, index) =>
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

        const { currency } = this.props;
        const { contentContainer } = styles;

        if (currency.isFetching) {
            return (
                <View>
                    <Spinner
                        visible={currency.isFetching}
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

const styles = {
    contentContainer: {
        paddingBottom: 100,
        paddingTop: 55
    }
}

function mapStateToProps(state) {
    return {
        currency: state.currency
    }
}

export default connect(mapStateToProps, { FetchCoinData })(CurrencyContainer)
