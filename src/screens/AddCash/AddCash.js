import { View, Text, TextInput, Button, Alert } from "react-native";
import React, { useState, useEffect } from "react";
import styles from "./styles";
import axios from "axios";
import { useRoute } from "@react-navigation/native";

const AddCash = ({ navigation }) => {
  const route = useRoute();
  const [money, setMoney] = useState();
  const [cash, setCash] = useState(0);
  const loquesea = 0;
  function addCash() {
    axios
      .put("http://10.0.2.2:3000/user/1", {
        cash: money + parseInt(cash),
      })
      .then((resp) => {
        console.log(resp.data);
      })
      .then(() => {
        navigation.navigate("Home", { loquesea });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  useEffect(() => {
    setMoney(route.params.cash);
  }, [route.params]);

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
          onPress={() => addCash()}
        />
      </View>
    </View>
  );
};

export default AddCash;
