import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      width: 400, 
      height: 400,
      top: 100, 
      flex: 1,
      alignItems: 'center'
    },
    splashImage: {
      width: 220, 
      height: 220,
      bottom: 20
    },
    inputs: {
      color: "#66676C",
      width: 250, 
      height: 40,
      margin: 18,
      borderWidth: 1,
      borderColor: "#CCCCCC",
      padding: 10,
      borderRadius: 10
    },  
    button: {
      width: 250, 
      height: 50,
      backgroundColor: "#4D6CFE"
    }
  });

export default styles;