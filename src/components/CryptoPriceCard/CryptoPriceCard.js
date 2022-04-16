import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";

const CryptoPriceCard = ({ symbol, image, price }) => {
  //console.log(symbol);
  //{symbol.toUpperCase()}
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
            1 $  = {price} USD
          </Text>
        </View>
      </View>
    </>
  );
};

export default CryptoPriceCard;
