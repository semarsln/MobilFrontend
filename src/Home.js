import React from "react";
import { SafeAreaView, Text,StyleSheet, ImageBackground, Image,View,TouchableOpacity } from "react-native";
import { Pressable } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const Home=({ navigation })=>{
    return(
       
      
        <SafeAreaView style={styles.container}>
          <TouchableOpacity style={styles.square}  onPress={()=>navigation.navigate("Languages")}>
            <MaterialCommunityIcons name="translate" color={"#fff"} size={50} />
            <Text style={styles.text}>Programming Languages</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.square} onPress={() => navigation.navigate('Maps')} >
            <MaterialCommunityIcons name="map-marker-multiple" color={"#fff"} size={50} />
            <Text style={styles.text}>Maps</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.square} onPress={() => navigation.navigate('Settings')} >
            <MaterialCommunityIcons name="account" color={"#fff"} size={50} />
            <Text style={styles.text}>Account Page</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.square} onPress={() => navigation.navigate('Info')} >
            <MaterialCommunityIcons name="help" color={"#fff"} size={50} />
            <Text style={styles.text}>What is the React Native</Text>
          </TouchableOpacity>
          </SafeAreaView>

        

    

       
    )
}
export default Home;

const styles = StyleSheet.create({
container:{
    flex: 1,
    flexDirection:'row',
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    alignSelf:"center",
    alignContent:"center",
    backgroundColor:"#FEBAAB"
    

},
image: {
    flex: 1,
    alignSelf: 'stretch',
    width: null,
    opacity:0.8
  },
  square: {
    backgroundColor: "#7cb48f",
    width: 150,
    height: 150,
    margin: 2,
   
    justifyContent: "center",
    alignItems: "center",
  },
  
  
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    opacity:0.8,
    
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
    textAlign:"center",
    opacity:1
  },

})