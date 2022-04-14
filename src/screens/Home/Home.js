import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import styles from "./styles";
import { MaterialCommunityIcons } from "@expo/vector-icons/";
import CryptoPriceCard from "../../components/CryptoPriceCard/CryptoPriceCard";
import SignUp from "../signUp/SignUp"

const Tab = createNativeStackNavigator();

const Home = () => {
  return (
    <View style={styles.homeContainer}>
      <View style={styles.topBar}>
        <View style={styles.nameBar}>
          <View>
            <Text style={styles.nameText}>Hi, Juan Perez</Text>
          </View>
            <NavigationContainer>
          <View style={styles.nameImage}>
            <MaterialCommunityIcons color="white" name="account" size={30} />
              <Tab.Navigator initialRouteName="singUp">
                <Tab.Screen name="singUp" component={SignUp} />
              </Tab.Navigator>
          </View>
            </NavigationContainer>
        </View>
        <View style={styles.myBalance}>
          <Text style={styles.balanceNumber}>$1,245</Text>
          <Text style={styles.balanceText}>My USD Balance</Text>
        </View>
        <View style={styles.myOperations}>
          <TouchableOpacity style={styles.operations}>
            <MaterialCommunityIcons
              color="white"
              name="plus-circle-outline"
              size={30}
            />
            <Text style={styles.operationName}>Add</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.operations}>
            <MaterialCommunityIcons
              color="white"
              name="arrow-left-circle-outline"
              size={30}
            />

            <Text style={styles.operationName}>Buy</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.operations}>
            <MaterialCommunityIcons
              color="white"
              name="arrow-right-circle-outline"
              size={30}
            />
            <Text style={styles.operationName}>Sell</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.homeScreen}>
        <Text>Crypto Market</Text>
        <CryptoPriceCard />
      </View>
    </View>
  );
};

export default Home;
