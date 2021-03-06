import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  addCashContainer: {
    flex: 1,
    alignItems: "center",
    marginTop: 40,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
  },
  input: {
    margin: 5,
    padding: 5,
    fontSize: 28,
    justifyContent: "center",
    alignItems: "center",
  },
  currency: {
    fontSize: 28,
    padding: 5,
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
  },
  textContainer: {
    flex: 2,
    justifyContent: "center",
  },
  buttonContainer: {
    flex: 1,
    width: "100%",
    justifyContent: "flex-end",
    marginBottom: 20,
  },
});

export default styles;
