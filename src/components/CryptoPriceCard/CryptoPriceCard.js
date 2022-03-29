import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import { MaterialCommunityIcons } from "@expo/vector-icons/";

const CryptoPriceCard = (cryptocurrency) => {
  return (
    <>
      <View style={styles.cardCrypto}>
        <View>
          <MaterialCommunityIcons color="#f7931a" name="bitcoin" size={30} />
        </View>
        <View>
          <Text>1 BTH = 40.000 USD</Text>
        </View>
      </View>
      <View style={styles.cardCrypto}>
        <View>
          <MaterialCommunityIcons color="black" name="ethereum" size={30} />
        </View>
        <View>
          <Text>1 ETH = 40.000 USD</Text>
        </View>
      </View>
    </>
  );
};

export default CryptoPriceCard;
