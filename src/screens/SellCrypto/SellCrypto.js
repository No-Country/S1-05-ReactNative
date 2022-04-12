import { View, Text, Button, TextInput, Picker, Alert } from "react-native";
import React, { useState, useEffect } from "react";
import styles from "./styles";
import { MaterialCommunityIcons } from "@expo/vector-icons/";
import axios from "axios";

const SellCrypto = () => {
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

  async function loadData() {
    try {
      const response = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      );
      setCoins(response.data);
      changeCurrentValue();
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
                  label={number.symbol.toUpperCase()}
                  value={number.symbol}
                  index={number.length}
                />
              ))}
            </Picker>
          </View>
          <View style={styles.arrow}>
            <MaterialCommunityIcons
              color="black"
              name="arrow-right"
              size={30}
            />
          </View>
          <View style={styles.cryptoMenu}>
            <Text>USD</Text>
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
          title="SELL"
          color="#4D6CFE"
          accessibilityLabel="ADD MONEY"
          onPress={() => Alert.alert("Crypto sold successfully")}
        />
      </View>
    </View>
  );
};

export default SellCrypto;
