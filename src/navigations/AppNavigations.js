import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../screens/Home/Home";
import Profile from "../screens/Profile/Profile";
import Wallet from "../screens/Wallet/Wallet";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import CoinDetails from "../screens/CoinDetails/CoinDetails";

import BuyCrypto from "../screens/BuyCrypto/BuyCrypto";
import SellCrypto from "../screens/SellCrypto/SellCrypto";
import AddCash from "../screens/AddCash/AddCash";
import { createStackNavigator } from "@react-navigation/stack";


const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();
export const HomeScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="BuyCrypto" component={BuyCrypto} />
      <Stack.Screen name="SellCrypto" component={SellCrypto} />
      <Stack.Screen name="AddCash" component={AddCash} />
         
        <Stack.Screen
          name='Coin Details'
          component={CoinDetails}
          options={{
            headerBackTitleVisible: false,
          }}
          />
    </Stack.Navigator>
  );
};

const AppNavigations = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarHideOnKeyboard: true,
        }}
      >
        <Tab.Screen
          name="Home"

          component={HomeScreen}

          options={{
            headerShown: false,
            tabBarLabel: "Home",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Wallet"
          component={Wallet}
          options={{
            tabBarLabel: "Wallet",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="wallet" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: "Profile",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="account"
                color={color}
                size={size}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>

    
  );
};





export default AppNavigations;
