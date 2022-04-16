import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../screens/Home/Home";
import Profile from "../screens/Profile/Profile";
import Wallet from "../screens/Wallet/Wallet";
import CoinDetails from "../screens/CoinDetails/CoinDetails";
import BuyCrypto from "../screens/BuyCrypto/BuyCrypto";
import SellCrypto from "../screens/SellCrypto/SellCrypto";
import AddCash from "../screens/AddCash/AddCash";

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
          headerShown: false,
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
          name="HomeScreen"

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
