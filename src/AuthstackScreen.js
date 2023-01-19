import React from "react";
import { createStackNavigator } from '@react-navigation/stack';

import Login from "./Login";
import Register from "./Register";
const Stack = createStackNavigator();

const AuthStackScreen=()=>{
    return(
        <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
       
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
    )
}

export default AuthStackScreen;