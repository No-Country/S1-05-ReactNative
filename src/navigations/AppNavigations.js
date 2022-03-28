import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
//import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../screens/Home/Home";
import Profile from "../screens/Profile/Profile";
import Wallet from "../screens/Wallet/Wallet";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

//const Tab = createMaterialBottomTabNavigator();
const Tab = createBottomTabNavigator();
const AppNavigations = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
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