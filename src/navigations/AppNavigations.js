import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "../screens/Home/Home";
import Profile from "../screens/Profile/Profile";
import Wallet from "../screens/Wallet/Wallet";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import CoinDetails from "../screens/CoinDetails/CoinDetails";

//const Tab = createMaterialBottomTabNavigator();
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const AppNavigations = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={MyStack}
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

function MyStack (){
  return(
      <Stack.Navigator
        initialRouteName="HomeScreen"
        >
        <Stack.Screen
          name='HomeScreen'
          component={Home}
          options={{
            headerShown: false,
          }}
          />
        <Stack.Screen
          name='Coin Details'
          component={CoinDetails}
          options={{
            headerBackTitleVisible: false,
          }}
          />
          

      </Stack.Navigator>
  )
}



export default AppNavigations;
