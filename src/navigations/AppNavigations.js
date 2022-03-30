import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { useSelector } from 'react-redux';

import Home from "../screens/Home/Home";
import Profile from "../screens/Profile/Profile";
import Wallet from "../screens/Wallet/Wallet";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faHome, faWallet, faUser } from '@fortawesome/free-solid-svg-icons';
import LoginScreen from "../login/LoginScreen";

const Tab = createMaterialBottomTabNavigator();

const AppNavigations = () => {

  const { auth } = useSelector(state => state);

  if (!auth.session) {
    return (
      <LoginScreen />
    );
  }
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color }) => {
            if (route.name === 'Home') {
              return (
                <FontAwesomeIcon
                  icon={faHome}
                  color={color}
                />
              );
            } else if (route.name === 'Wallet') {
              return (
                <FontAwesomeIcon
                  icon={faWallet}
                  color={color}
                />
              );
            } else {
              return (
                <FontAwesomeIcon
                  icon={faUser}
                  color={color}
                />
              )
            }
          },
          tabBarInactiveTintColor: 'gray',
          tabBarActiveTintColor: 'white',
        })}
      >

        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Wallet" component={Wallet} />
        <Tab.Screen name="Profile" component={Profile} options={{ tabBarBadge: 3 }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigations;
