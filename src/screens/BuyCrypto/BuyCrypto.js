import { View, Text, Button, TextInput, Picker, Alert } from "react-native";
import React, { useState, useEffect } from "react";
import styles from "./styles";
import { MaterialCommunityIcons } from "@expo/vector-icons/";
import { useRoute } from "@react-navigation/native";
import axios from "axios";

const BuyCrypto = () => {
  const route = useRoute();
  const [cash, setCash] = useState(0);
  const [coins, setCoins] = useState([]);
  const [selectedCoin, setSelectedCoin] = useState("BTC");
  const [crypto, setCrypto] = useState("0");
  const [currentValue, setcurrentValue] = useState(0);
  const [index, setIndex] = useState(0);
  function changeCurrentValue() {
    const result = coins.map((word) => {
      if (word.symbol === selectedCoin) {
        setcurrentValue(word.current_price);
      }
    });
  }
  async function reloadingCash() {
    try {
      axios.put("http://10.0.2.2:3000/user/1", {
        cash: parseInt(cash) - crypto,
      });
    } catch (error) {
      console.log(error);
    }
  }

  async function buyCrypto() {
    let cryptoValue = crypto / currentValue;
    try {
      axios.post("http://10.0.2.2:3000/cryptos/", {
        usd: crypto,
        symbol: selectedCoin,
        crypto: cryptoValue,
      });
      Alert.alert("crypto bought successfully");
      reloadingCash();
    } catch (error) {
      console.log(error);
    }
  }
  async function loadCash() {
    try {
      const response = await axios.get("http://10.0.2.2:3000/user");
      let midata = response.data;
      setCash(midata[0].cash);
    } catch (error) {
      console.log(error);
    }
  }

  async function loadData() {
    try {
      const response = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      );
      setCoins(response.data);
      changeCurrentValue();
      loadCash();
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    loadData();
  }, [selectedCoin]);

  return (
    <View style={styles.addCashContainer}>
      <View style={styles.textContainer}>
        <View style={styles.cryptoCalculator}>
          <View style={styles.cryptoMenu}>
            <Text>USD</Text>
          </View>
          <View style={styles.arrow}>
            <MaterialCommunityIcons
              color="black"
              name="arrow-right"
              size={30}
            />
          </View>
          <View style={styles.cryptoCurrency}>
            <Picker
              selectedValue={setSelectedCoin}
              style={{ height: 50, width: 100 }}
              onValueChange={(itemValue, itemIndex) => {
                setSelectedCoin(itemValue), setIndex(itemIndex);
              }}
            >
              {coins.map((number) => (
                <Picker.Item
                  key={number.id}
                  label={number.symbol.toUpperCase()}
                  value={number.symbol}
                  index={number.length}
                />
              ))}
            </Picker>
          </View>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.currency}>$</Text>
          <TextInput
            autoFocus={true}
            style={styles.input}
            onChangeText={setCrypto}
            keyboardType="numeric"
            placeholder="0"
          />
        </View>
        <View style={styles.cryptoChange}>
          <Text style={styles.textChange}>
            = {crypto / currentValue} {selectedCoin.toUpperCase()}
          </Text>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <Button
          style={styles.button}
          title="BUY"
          color="#4D6CFE"
          accessibilityLabel="ADD MONEY"
          onPress={() => buyCrypto()}
        />
      </View>
    </View>
  );
};

export default BuyCrypto;
