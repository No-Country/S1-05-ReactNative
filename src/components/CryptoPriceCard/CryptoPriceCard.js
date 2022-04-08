import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import styles from "./styles";
import { MaterialCommunityIcons } from "@expo/vector-icons/";
import { useNavigation } from "@react-navigation/native";


const CryptoPriceCard = ({ item, symbol, image, price }) => {
  const navigation = useNavigation();
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
              1 {symbol.toUpperCase()} = {price} USD
            </Text>
          </View>
        </View>
      </Pressable>
    </>
  );
};

export default CryptoPriceCard;
