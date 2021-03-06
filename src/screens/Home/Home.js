import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import { MaterialCommunityIcons } from "@expo/vector-icons/";
import CryptoMarket from "../../components/CryptoMarket/CryptoMarket";
import { useRoute } from "@react-navigation/native";
import { RotationGestureHandler } from "react-native-gesture-handler";
import { roundToNearestPixel } from "react-native/Libraries/Utilities/PixelRatio";

const Home = ({ navigation }) => {
  const [cash, setCash] = useState(0);
  const route = useRoute();

  function mycash() {
    if (route.params != undefined) {
      let suma = parseInt(cash) + parseInt(route.params.cash);
      setCash(suma);
      return cash;
    } else return cash;
  }
  useEffect(() => {
    mycash(setCash);
  }, [route.params]);

  return (
    <View style={styles.homeContainer}>
      <View style={styles.topBar}>
        <View style={styles.nameBar}>
          <View>
            <Text style={styles.nameText}>Hi, Juan Perez</Text>
          </View>
          <View style={styles.nameImage}>
            <MaterialCommunityIcons color="white" name="account" size={30} />
          </View>
        </View>
        <View style={styles.myBalance}>
          <Text style={styles.balanceNumber}>{cash}</Text>

          <Text style={styles.balanceText}>My USD Balance</Text>
        </View>
        <View style={styles.myOperations}>
          <TouchableOpacity
            style={styles.operations}
            onPress={() => {
              navigation.navigate("AddCash");
            }}
          >
            <MaterialCommunityIcons
              color="white"
              name="plus-circle-outline"
              size={30}
            />
            <Text style={styles.operationName}>Add</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.operations}
            onPress={() => {
              navigation.navigate("BuyCrypto");
            }}
          >
            <MaterialCommunityIcons
              color="white"
              name="arrow-left-circle-outline"
              size={30}
            />

            <Text style={styles.operationName}>Buy</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.operations}
            onPress={() => {
              navigation.navigate("SellCrypto");
            }}
          >
            <MaterialCommunityIcons
              color="white"
              name="arrow-right-circle-outline"
              size={30}
            />
            <Text style={styles.operationName}>Sell</Text>
          </TouchableOpacity>
        </View>
      </View>
      <CryptoMarket />
    </View>
  );
};

export default Home;
