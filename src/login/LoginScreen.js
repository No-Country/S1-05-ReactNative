import React from 'react';
import { SvgUri } from 'react-native-svg';
import { View, Text, TextInput, Pressable, Image } from 'react-native';
import styles from './styles';

const LoginScreen = () => {
    return(
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.title}>Welcome back!</Text>
                <Text style={styles.span}>Please sign in to your account</Text>
            </View>
            <View style={styles.formContainer}>
                <TextInput 
                    placeholder="Username"
                    placeholderTextColor="#66676C"
                    style={styles.input}
                />
                <TextInput 
                    placeholder="Password"
                    placeholderTextColor="#66676C"
                    style={styles.input}
                />
                <Pressable
                    onPress={ () => alert("click") }
                >
                    <Text style={styles.span}>Forgot Password?</Text>
                </Pressable>

                
            </View>
            <View style={styles.btnContainer}>
                <Pressable style={styles.btnPrimary}>
                    <Text style={{color: "white"}}>Sign In</Text>
                </Pressable>
                <Pressable style={styles.btnSignGoogle}>
                    <Text>
                        Sign in with Google
                    </Text>
                </Pressable>
                <Pressable style={styles.btnSignFacebook}>
                    <Text style={{color: "white"}}>
                        Sign in with Facebook
                    </Text>
                </Pressable>
                <Pressable>
                    <Text style={{color: "#404EB3", textAlign: "center"}}>
                        Don't Have An Account?
                    </Text>
                </Pressable>
            </View>

        </View>
    )
}

export default LoginScreen;