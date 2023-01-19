import React, { useState } from "react";
import { SafeAreaView, Text, StyleSheet, ImageBackground,View } from "react-native";
import { TextInput } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { Button } from "react-native-paper";
const Register = ({navigation}) => {
    const [text, setText] = React.useState('');
    const [passwordVisible, setPasswordVisible] = useState(true);

    return (
     
            <View style={styles.container} >
                <Text style={styles.txt}>Username</Text>
                <TextInput
                    style={styles.input}

                    value={text}
                    onChangeText={text => setText(text)}
                />
                <Text style={styles.txt}>Password</Text>
                <TextInput
                    style={styles.input}

                    secureTextEntry={passwordVisible}
                    right={<TextInput.Icon icon="eye" name={passwordVisible ? 'eye' : 'eye-off'} onPress={() => setPasswordVisible(!passwordVisible)} />}
                />
                <Button icon="login" mode="contained" onPress={() => navigation.navigate("Home")} style={styles.btn}>
                    Register
                </Button>
                <Text
                    style={styles.register}
                    onPress={() => navigation.navigate("Login")}>
                    {' '}
                   Aldready have an account?
                  </Text>
            </View>
           
       
    )
}
export default Register;
const styles = StyleSheet.create({
    input: {
        height: 40,
        width: 200,
        margin: 12,
        borderBottomWidth: 1,
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
       
        alignContent: "center",
        backgroundColor:"#FEBAAB"
    },
   
    txt:{
        textAlign:"center",
        fontSize:20,
        color:"#fff"
    },
    btn:{
        backgroundColor:"red",
        
    },
    register:{
        color:"#fff",
        textAlign:"center"
      
    }
});