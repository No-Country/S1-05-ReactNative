import React from 'react';
import { View, Text, TextInput, Pressable, Image } from 'react-native';
import styles from './styles';
import { useForm, Controller } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faAt, faLock, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

import googleLogo from '../assets/google-icon.png';
import facebookLogo from '../assets/facebook-icon.png';
import cryptoWalletLogo from '../assets/crypto-wallet-logo.png';

import { startGoogleLogin, startLoginEmailPass } from '../redux/actions/auth';
//import { GoogleSignin } from '@react-native-google-signin/google-signin';

const LoginScreen = () => {

    const [showPass, setShowPass] = React.useState(true);
    const dispatch = useDispatch();

    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            username: '',
            password: ''
        }
    });

    /* Login with email and password */
    const signIn = (data) => {
        if (data.username !== '' && data.password !== '') {
            dispatch(startLoginEmailPass(data))
        } else {
            alert("username and password cant be empty")
        }
    }

    /* Login with google */
    const signInWithGoogle = async () => {
        // try{
        //     await GoogleSignin.hasPlayServices();

        //     const { idToken } = await GoogleSignin.signIn(GoogleSignin);            

        //     dispatch(startGoogleLogin( idToken ))
            
        // }catch(error){
        //     alert(error.message);
        //     alert(error.code)
        // }
    }

    const signInWithFacebook = () => {
        alert("Facebook login comming soon!!")
    }

    const showPassword = () => {
        setShowPass(!showPass);
    }

    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Image source={cryptoWalletLogo} style={styles.cryptoWallerLogo} />
                <Text style={styles.title}>Welcome back!</Text>
                <Text style={styles.span}>Please sign in to your account</Text>
            </View>
            <View style={styles.formContainer}>
                <Controller
                    control={control}
                    rules={{
                        required: true
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <View style={styles.inputsContainer}>
                            <FontAwesomeIcon icon={faAt} color="#64656A" style={{ marginEnd: 20 }} />
                            <TextInput
                                placeholder="User email"
                                placeholderTextColor="#66676C"
                                style={styles.input}
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                            />
                        </View>
                    )}
                    name="username"
                />
                <Controller
                    control={control}
                    rules={{
                        required: true
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <View style={styles.inputsContainer}>
                            <FontAwesomeIcon icon={faLock} color="#64656A" style={{ marginEnd: 20 }} />
                            <TextInput
                                placeholder="Password"
                                placeholderTextColor="#66676C"
                                style={styles.input}
                                secureTextEntry={showPass}
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                            />
                            <Pressable onPress={showPassword}>
                                <FontAwesomeIcon icon={showPass ? faEye : faEyeSlash} color="#64656A" />
                            </Pressable>
                        </View>
                    )}
                    name="password"
                />
                <Pressable
                    onPress={() => alert(session)}
                >
                    <Text style={styles.span}>Forgot Password?</Text>
                </Pressable>

            </View>
            <View style={styles.btnContainer}>
                <Pressable style={styles.btnPrimary} onPress={handleSubmit(signIn)}>
                    <Text style={{ color: "white" }}>Sign In</Text>
                </Pressable>

                <Pressable style={styles.btnSignGoogle} onPress={signInWithGoogle}>
                    <Image source={googleLogo} style={styles.socialMediasLogo} />
                    <Text>Sign in with Google</Text>
                </Pressable>

                <Pressable style={styles.btnSignFacebook} onPress={signInWithFacebook}>
                    <Image source={facebookLogo} style={styles.socialMediasLogo} />
                    <Text style={{ color: "white" }}>
                        Sign in with Facebook
                    </Text>
                </Pressable>

                <Pressable>
                    <Text style={{ color: "#404EB3", textAlign: "center" }}>
                        Don't Have An Account?
                    </Text>
                </Pressable>
            </View>

        </View>
    )
}

export default LoginScreen;