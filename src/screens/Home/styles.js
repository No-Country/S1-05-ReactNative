import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F9FAFC",
  },
  topBar: {
    backgroundColor: "#4D6CFE",
    flex: 2,
    width: "100%",
    paddingTop: 35,
    paddingLeft: 20,
    paddingRight: 20,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  nameBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    /*backgroundColor: "blue",*/
    flex: 1,
    alignItems: "center",
  },
  nameText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  nameImage: {
    width: 30,
    height: 30,
    /*backgroundColor: "white",
    borderRadius: 100,*/
  },
  myBalance: {
    justifyContent: "center",
    alignItems: "center",
    /*backgroundColor: "gray",*/
    flex: 2,
  },
  balanceNumber: { color: "white", fontSize: 35, fontWeight: "bold" },
  balanceText: { color: "white", fontSize: 14 },
  homeScreen: {
    flex: 3,
    paddingRight: 20,
    paddingLeft: 20,
    width: "100%",
    alignItems: "center",
  },
  myOperations: {
    flexDirection: "row",
    justifyContent: "space-around",
    /*backgroundColor: "yellow",*/
    flex: 2,
    alignItems: "center",
  },
  operations: {
    alignItems: "center",
  },
  operationName: {
    color: "white",
    padding: 5,
  },
  cardCrypto: {
    flexDirection: "row",
    backgroundColor: "white",
    width: "100%",
    padding: 20,
    borderRadius: 10,
    marginTop: 10,
    alignItems: "center",
  },
});

export default styles;
