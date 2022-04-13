import React, { useState, useEffect } from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";
import axios from "axios";

import CryptoMarket from "../../components/CryptoMarket/CryptoMarket";
import CryptoChart from "../../components/CryptoChart/CryptoChart";
import { formatNumber } from "../../helpers/numbers";
import loadingSVG from '../../../assets/images/loading.svg'


const CoinDetails = ({ route }) => {

  const { coin } = route.params;
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  async function loadData() {
    try {
      setLoading(true)
      const response = await axios.get(
        "https://api.coingecko.com/api/v3/coins/" + coin.id + "/market_chart?vs_currency=usd&days=30&interval=daily"
      );
      setHistory(
        response.data.prices.map((item) => {
          return item[1]
        })
      )
    }
    catch (error) {
      console.error(error);
    }
    finally {
      setLoading(false)
    }
  }
  useEffect(() => {
    loadData();
  }, [coin]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.coinDetailTitle}>
          <View>
            <Image
              style={styles.imageCrypto}
              source={{
                uri: coin.image,
              }}
            />
          </View>
          <View>
            <Text style={styles.title}>
              {coin.name}
            </Text>
          </View>
        </View>
        <View style={styles.coinDetailPrice}>
          <View>
            <Text style={styles.price}>
              1 {coin.symbol.toUpperCase()} = {formatNumber(coin.current_price)} USD
            </Text>
          </View>
        </View>

        <View style={styles.chartLoading}>
          {loading ?
            <View style={styles.chartLoading}>
              <Image
                style={styles.loadingImg}
                source={{
                  uri: loadingSVG,
                }} />
              <Text style={styles.loadingText}>Loading Chart...</Text>
            </View>
            : <CryptoChart chartData={history} />}
        </View>

        <View style={styles.rung}>
          <View>
            <Text style={styles.text}>
              Market Cap Rank: {coin.market_cap_rank}°
            </Text>
          </View>
        </View>
        <View style={styles.rung}>
          <View>
            <Text style={styles.text}>
              Market Cap: {formatNumber(coin.market_cap)} USD
            </Text>
          </View>
        </View>
        <View style={styles.rung}>
          <View>
            <Text style={(coin.price_change_percentage_24h >= 0) ? styles.green : styles.red}>
              24hs {formatNumber(coin.price_change_percentage_24h, 3)}%
            </Text>
          </View>
        </View>
      </View>

      <CryptoMarket />

    </View>
  );
};

export default CoinDetails;
