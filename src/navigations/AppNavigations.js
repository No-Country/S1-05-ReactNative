import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Home from "../screens/Home/Home";
import Profile from "../screens/Profile/Profile";
import Wallet from "../screens/Wallet/Wallet";

const Tab = createMaterialBottomTabNavigator();

const AppNavigations = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Wallet" component={Wallet} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigations;
