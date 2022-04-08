import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";

const CoinDetails = ({ route }) => {

  const { coin } = route.params;
//const coin={image:'as',symbol:'BTC',current_price:'43500'}
  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <View style={styles.cardCrypto}>
        <View>
          <Image
            style={styles.imageCrypto}
            source={{
              uri: coin.image,
            }}
          />
        </View>
        <View>
        <Text style={styles.price}>
            1 {coin.symbol.toUpperCase()} = {coin.current_price} USD
          </Text>
        </View>
      </View>
      </View>
    </View>
  );
};

export default CoinDetails;
