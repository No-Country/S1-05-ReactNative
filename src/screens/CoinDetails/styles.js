import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",    
  },
  imageCrypto: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  cardCrypto: {
    flexDirection: "row",
    width: "100%",
    padding: 20,
    alignItems:"center",
    justifyContent:"flex-start"
    },
  header:{
    width:'100%',
    backgroundColor: "#4D6CFE",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,    
  },
  headerContent:{
    padding:30,
    alignItems: 'center',
  },
  price:{
    color: "white", 
    fontSize: '1.5em', 
    fontWeight: "bold",
    justifyContent:"center"
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
  },
  name:{
    fontSize:22,
    color:"#000000",
    fontWeight:'600',
  },
  userInfo:{
    fontSize:16,
    color:"#778899",
    fontWeight:'600',
  },
  body:{
    backgroundColor: "#778899",
    height:500,
    alignItems:'center',
  },
  item:{
    flexDirection : 'row',
  },
  infoContent:{
    flex:1,
    alignItems:'flex-start',
    paddingLeft:5
  },
  iconContent:{
    flex:1,
    alignItems:'flex-end',
    paddingRight:5,
  },
  icon:{
    width:30,
    height:30,
    marginTop:20,
  },
  info:{
    fontSize:18,
    marginTop:20,
    color: "#FFFFFF",
  }
});

export default styles;
