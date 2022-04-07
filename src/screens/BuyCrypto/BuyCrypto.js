import { View, Text, Button, TextInput } from "react-native";
import React, { useState } from "react";
import styles from "./styles";

const BuyCrypto = () => {
  const [crypto, setCrypto] = useState("0");
  return (
    <View style={styles.addCashContainer}>
      <View style={styles.textContainer}>
        <View style={styles.cryptoCalculator}>
          <View style={styles.cryptoMenu}>
            <Text style={styles.currency}>pesos</Text>
          </View>
          <View>
            <Text style={styles.arrow}>--x</Text>
          </View>
          <View>
            <Text style={styles.cryptoCurrency}>hola</Text>
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
      </View>
      <View style={styles.buttonContainer}>
        <Button
          style={styles.button}
          title="BUY"
          color="#4D6CFE"
          accessibilityLabel="ADD MONEY"
          onPress={() => Alert.alert("money added successfully")}
        />
      </View>
    </View>
  );
};

export default BuyCrypto;
