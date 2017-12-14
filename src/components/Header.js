import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => {
    return (
        <View style={headerContainer}>
            <Text style={header}>
                Stockr - Crypto Tracker
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
    }
})

const { headerContainer, header } = styles;


export default Header;
