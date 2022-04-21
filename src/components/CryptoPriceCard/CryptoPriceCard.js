import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import PropTypes from "prop-types";
import styles from "./styles";

import { formatNumber } from "../../helpers/numbers";

const CryptoPriceCard = ({ item }) => {
  const navigation = useNavigation();
  const { symbol, image, current_price, market_cap_rank } = item;

  return (
    <>
      <Pressable
        onPress={() =>
          navigation.navigate("Coin Details", {
            coin: item,
          })
        }
      >
        <View style={styles.cardCrypto}>
          <View style={styles.rankCrypto}>
            <Text>{market_cap_rank}°</Text>
          </View>
          <View style={styles.imageCryptoContent}>
            <Image
              style={styles.imageCrypto}
              source={{
                uri: image,
              }}
            />
          </View>
          <View style={styles.textCrypto}>
            <Text>
              {" " + symbol.toUpperCase()} = {formatNumber(current_price) + " "}{" "}
              USD
            </Text>
          </View>
        </View>
      </Pressable>
    </>
  );
};

export default CryptoPriceCard;

CryptoPriceCard.propTypes = {
  item: PropTypes.object.isRequired,
};
