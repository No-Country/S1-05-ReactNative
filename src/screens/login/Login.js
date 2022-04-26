/* eslint-disable no-undef */
//import React, {useState, useEffect} from 'react';
import React from "react";
import { View, TextInput, Image } from "react-native";
import styles from "./styles";
import BlueButton from "../../components/buttons/BlueButton";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../../firebase/firebase";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Alert } from "react-native";

const Tab = createNativeStackNavigator();

const Login = ({ navigation }) => {
  const [fullName, setFullName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [phone, setPhone] = React.useState("");

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const handleCreateAccount = () => {
    createUserWithEmailAndPassword(auth, email, password, fullName, phone)
      .then((userCredential) => {
        console.log("Account created successfully!");
        const user = userCredential.user;
        console.log(user);
        Alert.alert("Account created successfully!");
      })
      .catch((error) => {
        const atSign = email.indexOf("@");

        console.log(email.indexOf("@"));

        const point = email.lastIndexOf(".");

        if (atSign < 1 || point - atSign < 2 || email === "") {
          Alert.alert("Your email or password are wrong");
        } else {
          Alert.alert("This Email is already in use" /*, error.message*/);
          console.log(error.message);
        }
      });
  };

  const handleSingIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        //Alert.alert("Signed in!");
        const user = userCredential.user;
        navigation.navigate("TabScreen");
      })
      .catch((error) => {
        Alert.alert("An error was succed, try again");
        console.log(error.message);
      });
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.splashImage}
        source={require("../../../assets/images/splash.png")}
      />
      {/*<TextInput
        style={styles.inputs}
        placeholder="FULL NAME"
        onChangeText={(text) => setFullName(text)}
      />*/}
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
      {/*<TextInput
        style={styles.inputs}
        placeholder="PHONE"
        onChangeText={(text) => setPhone(text)}
  />*/}
      <BlueButton onPressProp={handleCreateAccount} text="Sign Up" />
      <BlueButton onPressProp={handleSingIn} text="Login" />
    </View>
  );
};

export default Login;
