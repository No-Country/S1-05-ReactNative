import { View, Text, TextInput, Button, Alert } from "react-native";
import React, { useState } from "react";
import styles from "./styles";

const AddCash = () => {
  const [cash, setCash] = useState("0");

  return (
    <View style={styles.addCashContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          How much do you want to deposit to your account?
        </Text>
        <View style={styles.inputContainer}>
          <Text style={styles.currency}>$</Text>
          <TextInput
            autoFocus={true}
            style={styles.input}
            onChangeText={setCash}
            keyboardType="numeric"
            placeholder="0"
          />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          style={styles.button}
          title="ADD MONEY"
          color="#4D6CFE"
          accessibilityLabel="ADD MONEY"
          onPress={() => Alert.alert("money added successfully")}
        />
      </View>
    </View>
  );
};

export default AddCash;
