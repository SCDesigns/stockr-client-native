import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import logo from './../Assets/img/stockr.svg'

const Header = () => {
    return (
        <View style={headerContainer}>
            <Text style={header}>
              <Image
                  style={styles.image}
                  source={logo}
                  alt="Stockr: Crypto Tracker"
              />
            </Text>
        </View>
    )
}


const styles = StyleSheet.create({
    headerContainer: {
        display: "flex",
        marginTop: 55,
        alignItems: "center",
        backgroundColor: "#000",
    },
    header: {
        fontWeight: "bold",
        fontSize: 20,
        color: "#E7E5D3",
        paddingTop: 20,
        paddingBottom: 20,
    },
    image: {
      width: 105,
    }
})

const { headerContainer, header } = styles;


export default Header;
