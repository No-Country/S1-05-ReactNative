import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";
import { MaterialCommunityIcons } from "@expo/vector-icons/";

const CryptoPriceCard = ({ symbol, image, price }) => {
  //console.log(symbol);
  return (
    <>
      <View style={styles.cardCrypto}>
        <View>
          <Image
            style={styles.imageCrypto}
            source={{
              uri: image,
            }}
          />
        </View>
        <View>
          <Text>
            1 {symbol.toUpperCase()} = {price} USD
          </Text>
        </View>
      </View>
    </>
  );
};

export default CryptoPriceCard;
