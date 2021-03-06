import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    color: "white",
    flex: 3,
    flexDirection:"column",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  imageCrypto: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  coinDetailTitle: {
    flexDirection: "row",
    width: "100%",
    padding: 10,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  coinDetailPrice: {
    flexDirection: "row",
    width: "100%",
    paddingBottom: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    width: "100%",
    backgroundColor: "#4D6CFE",
    paddingBottom: 20,
    paddingTop:35,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  price: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
    justifyContent: "center",
    borderStyle: "solid",
    borderColor: "#bbb",
    borderWidth: 1,
    borderRadius: 4,
    padding: 5,
  },
  title: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 18,
  },
  rung: {
    flexDirection: "row",
    width: "100%",
    paddingTop: 5,
    paddingLeft: 20,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  red: {
    color: "#aa0000",
    fontSize: 16,
    fontWeight: "bold",
  },
  green: {
    color: "#00ff00",
    fontSize: 16,
    fontWeight: "bold",
  },
  justifyContentCenter: {
    justifyContent: "center",
  },
  chartLoading: {
    backgroundColor: "#2D4CdE",
    color: "white",
    height:280,
    alignItems: "center",
    justifyContent: "center",
  },
  loadingImg: {
    width: 80,
    height: 80,
  },
  loadingText: {
    color: "white",
    textAlign: "center",
    marginTop: 10,
  },
});

export default styles;
