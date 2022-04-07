import { View, Text, Button, TextInput, Picker, Alert } from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import { MaterialCommunityIcons } from "@expo/vector-icons/";

const BuyCrypto = () => {
  const [crypto, setCrypto] = useState("0");
  const [selectedValue, setSelectedValue] = useState("BTC");
  return (
    <View style={styles.addCashContainer}>
      <View style={styles.textContainer}>
        <View style={styles.cryptoCalculator}>
          <View style={styles.cryptoMenu}>
            <Text>DOLAR</Text>
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
              selectedValue={selectedValue}
              style={{ height: 50, width: 100 }}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedValue(itemValue)
              }
            >
              <Picker.Item label="BTC" value="BTC" />
              <Picker.Item label="ETH" value="ETH" />
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
          <Text style={styles.textChange}>= 0.00000 {selectedValue}</Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          style={styles.button}
          title="BUY"
          color="#4D6CFE"
          accessibilityLabel="ADD MONEY"
          onPress={() => Alert.alert("Crypto bought successfully")}
        />
      </View>
    </View>
  );
};

export default BuyCrypto;
