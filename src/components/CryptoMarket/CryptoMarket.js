import { View, Text, Image, FlatList, RefreshControl } from "react-native";
import React, { useState, useEffect } from "react";
import CryptoPriceCard from "../CryptoPriceCard/CryptoPriceCard";
import styles from "./styles";
import axios from "axios";
import loadingSVG from '../../../assets/images/loadingGrey.svg';

const CryptoMarket = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);

  async function loadData() {
    try {
      setLoading(true)
      const response = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      );
      setCoins(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadData();
  }, []);

  const [refreshing, setRefreshing] = React.useState(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    loadData().then(() => setRefreshing(false));
  }, []);

  return (
    <View style={styles.homeScreen}>
      <Text style={styles.cryptoTitle}>Crypto Market</Text>
      {loading ?
        <View style={styles.loadingCard}>
          <View>
            {/* <Image
              style={styles.loadingImg}
              source={{
                uri: loadingSVG,
              }}
            /> */}
          </View>
          <View>
            <Text style={styles.loadingText}>
              Loading top 100...
            </Text>
          </View>
        </View>
        :
        <FlatList
          refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
          style={styles.cryptoList}
          data={coins}
          renderItem={({ item }) => {
            return (
              <CryptoPriceCard item={item} />
            );
          }}
        />
      }
    </View>
  );
};

export default CryptoMarket;
