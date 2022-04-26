import React, { useState, useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import styles from "./styles";
import { useRoute } from "@react-navigation/native";
import axios from "axios";
import WalletCard from "../../components/WalletCard/WalletCard";

const Wallet = ({ navigation }) => {
  const route = useRoute();
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    navigation.addListener("focus", async () => {
      try {
        const response = await axios.get("http://10.0.2.2:3000/cryptos");
        let midata = response.data;
        setCoins(midata);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    });
  }, []);
  return (
    <View style={styles.homeContainer}>
      <FlatList
        data={coins}
        style={styles.walletList}
        renderItem={({ item }) => {
          return <WalletCard item={item} />;
        }}
      ></FlatList>
    </View>
  );
};

export default Wallet;
