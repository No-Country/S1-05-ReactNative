import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    alignItems: "center",
    paddingTop: 20,
    paddingBottom: 40,
    paddingLeft: 40,
    paddingRight: 40,
  },
  avatarContainer: {
    alignItems: "center",
  },
  avatarMenu: {
    backgroundColor: "#FFF",
    width: "100%",
    marginTop: 20,
    borderRadius: 5,
  },
  profileTab1: {
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    textAlign: "center",
  },
  icon: {
    backgroundColor: "#EBF7ED",
    borderRadius: 25,
    padding: 8,
    marginRight: 10,
  },
  emailText: {
    flexDirection: "column",
  },
  email: {
    color: "#A7A7A7",
  },
  avatarName: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default styles;
