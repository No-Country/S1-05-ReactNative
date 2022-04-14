import { View, Text, ScrollView, FlatList } from "react-native";
import React, { useState, useEffect } from "react";
import CryptoPriceCard from "../CryptoPriceCard/CryptoPriceCard";
import styles from "./styles";
import axios from "axios";

const CryptoMarket = () => {
  const [coins, setCoins] = useState([]);
  async function loadData() {
    try {
      const response = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      );

      setCoins(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    loadData();
  }, []);
  return (
    <View style={styles.homeScreen}>
      <Text style={styles.cryptoTitle}>Crypto Market</Text>
      <FlatList
        style={styles.cryptoList}
        data={coins}
        renderItem={({ item }) => {
          return (
            <CryptoPriceCard
              symbol={item.symbol}
              image={item.image}
              price={item.current_price}
            ></CryptoPriceCard>
          );
        }}
      />
    </View>
  );
};

export default CryptoMarket;
