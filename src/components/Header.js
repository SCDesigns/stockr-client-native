import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Svg,{
    Circle,
    Ellipse,
    G,
    LinearGradient,
    RadialGradient,
    Line,
    Path,
    Polygon,
    Polyline,
    Rect,
    Symbol,
    Use,
    Defs,
    Stop
} from 'react-native-svg';

const Header = () => {
    return (
      <View style={headerContainer}>
          <Image
            style={styles.header}
            source={require('./../Assets/img/stockr.png')}
          />
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
        marginTop: 10,
        marginBottom: 10,
        width: 130,
        height: 30,
    }
})

const { headerContainer, header } = styles;


export default Header;
