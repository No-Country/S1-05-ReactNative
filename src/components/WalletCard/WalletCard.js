import { View, Text } from "react-native";
import React from "react";
import styles from "./styles";

const WalletCard = ({ item }) => {
  return (
    <View style={styles.walletCrypto}>
      <View>
        <Text>USD :{item.usd}</Text>
      </View>
      <View style={styles.cryptoBalance}>
        <Text>{item.symbol.toUpperCase()}: </Text>
        <Text>{item.crypto}</Text>
      </View>
    </View>
  );
};

export default WalletCard;
