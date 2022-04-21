import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  homeScreen: {
    flex: 3,
    paddingRight: 20,
    paddingLeft: 20,
    width: "100%",
    alignItems: "center",
  },
  cryptoTitle: {
    padding: 15,
    color: "black",
    fontWeight: "bold",
  },
  cryptoList: {
    width: "100%",
  },
  loadingCard: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  loadingImg: {
    width: 50,
    height: 50,
    margin:10
  },
  loadingText:{
    color:"#555",
    textAlign:"center",
    marginTop:10
  }
});

export default styles;
