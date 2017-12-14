import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native';
import { images } from '../Utils/CoinIcons';

let iconSize = 40;

const styles = StyleSheet.create({
    container: {
        display: "flex",
        marginBottom: 20,
        borderBottomColor: "#E0E0E0",
        borderBottomWidth: 5,
        paddingTop: 10,
        paddingLeft: 20,
        paddingRight: 20
    },
    upperRow: {
        display: "flex",
        flex: 1,
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15
    },
    coinSymbol: {
        marginTop: 10,
        marginLeft: 10,
        fontSize: 20,
        fontWeight: "bold",
    },
    coinName: {
        fontSize: 20,
        marginBottom: 5
    },
    coinPrice: {
        fontWeight: "bold",
        fontSize: 20
    },
    namePrice: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-end',
    },
    image: {
        width: iconSize,
        height: iconSize,
        borderRadius: iconSize / 2, //make this a circle
        marginTop: 10
    },
    moneySymbol: {
        fontWeight: "bold",
        fontSize: 20
    },
    statisticsContainer: {
        display: "flex",
        borderTopColor: "#F5F5F5",
        borderTopWidth: 2,
        padding: 15,
        flexDirection: "row",
        justifyContent: "space-around"
    },
    percentChangePlus: {
        backgroundColor: "#00E676",
        fontWeight: "bold",
        marginLeft: 5
    },
    percentChangeMinus: {
        backgroundColor: "#FF5252",
        fontWeight: "bold",
        marginLeft: 5
    }
})

const {
    container,
    image,
    moneySymbol,
    upperRow,
    coinSymbol,
    coinName,
    coinPrice,
    namePrice,
    statisticsContainer,
    percentChangePlus,
    percentChangeMinus
} = styles;

const CoinCard = ({ symbol, coin_name, price_usd, ticker, percent_change_24h, percent_change_7d }) => {


    return (
        <View style={container}>

            <View style={upperRow}>
              <Image
                style={styles.image}
                source={{ uri: images[symbol] }}
              />
              <Text style={coinSymbol}>{symbol}</Text>
              <View style={namePrice}>
                <Text style={coinName}>{coin_name}</Text>
                <Text style={moneySymbol}> $
                  <Text style={coinPrice}>{price_usd}</Text>
                </Text>
              </View>
            </View>

            <View style={statisticsContainer}>

                <Text>24h:
                     <Text style={percent_change_24h < 0 ? percentChangeMinus : percentChangePlus }> {percent_change_24h} % </Text>
                </Text>
                <Text>7d:
                    <Text style={percent_change_7d < 0 ? percentChangeMinus : percentChangePlus }> {percent_change_7d} % </Text>
                </Text>

            </View>

        </View>
    );
}



export default CoinCard;
