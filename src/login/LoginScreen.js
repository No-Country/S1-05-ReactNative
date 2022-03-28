import React from 'react';
import { View, Text, TextInput, Pressable, Image } from 'react-native';
import styles from './styles';

import googleLogo from '../assets/google-icon.png';
import facebookLogo from '../assets/facebook-icon.png';
import cryptoWalletLogo from '../assets/crypto-wallet-logo.png';


/* Comentario de prueba */

const LoginScreen = () => {
    return(
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Image source={cryptoWalletLogo} style={styles.cryptoWallerLogo}/>
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
                    <Image source={googleLogo} style={styles.socialMediasLogo}/> 
                    <Text>Sign in with Google</Text>
                </Pressable>
                <Pressable style={styles.btnSignFacebook}>
                    <Image source={facebookLogo} style={styles.socialMediasLogo}/> 
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