import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  walletCrypto: {
    backgroundColor: "white",
    width: "100%",
    padding: 20,
    borderRadius: 10,
    marginBottom: 10,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  cryptoBalance: {
    flexDirection: "row",
  },
  imageCrypto: {
    width: 30,
    height: 30,
    marginRight: 15,
  },
  imageCryptoContent: {
    marginLeft: 6,
    marginRight: 3,
  },
  textCrypto: {
    marginLeft: 3,
  },
  rankCrypto: {
    fontWeight: "bold",
    minWidth: 25,
  },
});

export default styles;
