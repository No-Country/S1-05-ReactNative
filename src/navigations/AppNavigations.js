import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../screens/Home/Home";
import Profile from "../screens/Profile/Profile";
import Wallet from "../screens/Wallet/Wallet";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import BuyCrypto from "../screens/BuyCrypto/BuyCrypto";
import SellCrypto from "../screens/SellCrypto/SellCrypto";
import AddCash from "../screens/AddCash/AddCash";
import Login from "../screens/login/Login"
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeScreen(){
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
    </Stack.Navigator>
  );
};

function TabScreen() { 
  return (
  <Tab.Navigator
  initialRouteName="Home"
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
)
}
const AppNavigations = () => {

  return (
    <NavigationContainer>
     <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={ Login } />
      <Stack.Screen name="TabScreen" component={ TabScreen } />
     </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigations;
