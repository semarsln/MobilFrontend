import React from "react";
import { SafeAreaView,ImageBackground } from "react-native-safe-area-context";
import { Image, StyleSheet, Text } from "react-native";

const Splash = () => {
    return (
       <SafeAreaView>
        <Image  source={require("../assets/splashh.png")} />
       </SafeAreaView>
    )
}

export default Splash;

const styles=StyleSheet.create({
    image: {
        flex: 1,
        alignSelf: 'stretch',
        width: null,
        opacity: 0.9
    },
})