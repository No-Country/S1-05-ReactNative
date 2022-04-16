/* eslint-disable no-undef */
//import React, {useState, useEffect} from 'react';
import React from 'react';
import { View, Button, TextInput, Image } from 'react-native';
import styles from './styles'
import BlueButton from '../../components/buttons/BlueButton'
import BlueButtonLogin from '../../components/buttons/BlueButtonLogin';
import { NavigationContainer } from '@react-navigation/native';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { initializeApp } from 'firebase/app'
import { firebaseConfig } from '../../firebase/firebase'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Alert } from 'react-native';
import Home from '../Home/Home'


const Tab = createNativeStackNavigator();

const Login = ({ navigation }) => {
  const [fullName, setFullName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [phone, setPhone] = React.useState('')

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app)

  const handleCreateAccount = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log('Account created!')
        const user = userCredential.user
        console.log(user)
      })
      .catch(error => {
        const atSign = email.indexOf("@")
        
        console.log(email.indexOf("@"))

        const point =  email.lastIndexOf(".")

        if (atSign < 1 || ( point - atSign < 2 )|| email === ""){
          Alert.alert("Your email or password are wrong")
        }else{
          Alert.alert("This Email is already in use", error.message)
          }
      })
  }

  const handleSingIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log('Signed in!')
        const user = userCredential.user
        console.log(user)
      })
      .catch(error => {
        Alert.alert(error.message)
      })
  }

  return (
    <View
      style={styles.container}>
      <Image
        style={styles.splashImage}
        source={require('../../../assets/images/splash.png')}
      />
      <TextInput
        style={styles.inputs}
        placeholder="FULL NAME"
      />
      <TextInput
        style={styles.inputs}
        placeholder="E-MAIL"
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.inputs}
        placeholder="PASSWORD"
        onChangeText={(text) => setPassword(text)}

      />
      <TextInput
        style={styles.inputs}
        placeholder="PHONE"
      />
      <BlueButton
        onPressProp={ handleCreateAccount }
      />
      <BlueButtonLogin 
        onPressProp={ handleSingIn }
        navigation= {navigation}
      />
    </View>
  )
}

export default Login
