import React from 'react';
import {ImageBackground, StyleSheet, View, Image} from "react-native";

function MainScreen(props) {
    return (
        <View style={styles.container}>
            <Image
                    style={styles.logo}
                    source={require("../assets/sybil_logo.png")}
            />
        </View>
        
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
    },
    container: {
        justifyContent: 'center', //
        alignItems: 'center', //moves logo left -> right
    },
    logo: {
        width: 150,
        height: 150,
    },
})

export default MainScreen;