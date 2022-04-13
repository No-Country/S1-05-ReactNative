import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";


import { formatNumber } from "../../helpers/numbers";

const CryptoPriceCard = ({ item, symbol, image, price }) => {
  const navigation = useNavigation();
  const {symbol,image,current_price}=item;

  return (
    <>
      <Pressable onPress={() => navigation.navigate(
        'Coin Details',
        {
          coin: item,
        })}
      >
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
              1 {symbol.toUpperCase()} = {formatNumber(current_price)} USD
            </Text>
          </View>
        </View>
      </Pressable>
    </>
  );
};

export default CryptoPriceCard;
