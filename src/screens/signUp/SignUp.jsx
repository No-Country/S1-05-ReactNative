/* eslint-disable no-undef */
//import React, {useState, useEffect} from 'react';
import React from 'react';
import { View, Text, TextInput, Image} from 'react-native';
import styles from './styles'
import BlueButton from '../../components/buttons/BlueButton'
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
import { initializeApp} from 'firebase/app'
import { firebaseConfig } from '../../firebase/firebase'
//import ScrollViewNativeComponent from 'react-native/Libraries/Components/ScrollView/ScrollViewNativeComponent';

const HomeScreen  = () => {
  return (
    <View>
      <Text>Home Screen</Text>
    </View>
  )
}

const SignUp = () => {
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
      console.log(error)
    })
  }

  const handleSingIn = () => {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log('Signed in!')
      const user =userCredential.user
      console.log(user)
    })
    .catch(error => {
      console.log(error)
    })
  }

  return (

    <View
    style={ styles.container }>
       <Image
          style={ styles.splashImage }
          source={require('../../../assets/images/splash.png')}
        />
      <TextInput
        style={ styles.inputs }
        placeholder="FULL NAME"
      />
      <TextInput
        style={ styles.inputs }
        placeholder="PASSWORD"
        onChangeText={(text) => setPassword(text)}
      />
      <TextInput
        style={ styles.inputs }
        placeholder="E-MAIL"
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={ styles.inputs }
        placeholder="PHONE"
      />
      <BlueButton
        onPressProp={handleCreateAccount}
      />
    </View>
  )
}

export default SignUp
