import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Image } from "react-native";
import Home from "./Home";
import Settings from "./setting";
import Languages from "./Languages";
import Maps from "./Maps";
import Info from "./Info";
import Register from "./Register";
import Login from "./Login";
const Stack = createStackNavigator();
function LogoTitle() {
  return (
    <Image
      style={{ width: 250, height: 50 }}
      source={require('../assets/icon.png')}
    />
  );
}

const HomeStackScreen=()=>{
    return(
      <Stack.Navigator initialRouteName="Login"  >
      <Stack.Screen name="Home" component={Home}   />
      <Stack.Screen name="Settings" component={Settings}   />
      
      <Stack.Screen name="Languages" component={Languages}   />
      <Stack.Screen name="Maps" component={Maps}   />
      <Stack.Screen name="Info" component={Info} options={{headerTitle:"React Native"}}  />
      <Stack.Screen name="Login" component={Login} />
       
       <Stack.Screen name="Register" component={Register} />
      
      
            
            </Stack.Navigator>
    )
}

export default HomeStackScreen;