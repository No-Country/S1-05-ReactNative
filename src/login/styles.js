import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-evenly",
        backgroundColor: "#181A1F"
    },
    formContainer: {
        marginEnd: 20,
        marginStart: 20
    },
    btnContainer: {
        marginEnd: 60,
        marginStart: 60,
    },
    textContainer: {
        display: "flex",
        alignItems: "center"
    },
    title:{
        fontSize: 25,
        fontWeight: "bold",
        color: "#FBFBFB"
    },
    span: {
        color: "#64656A",
        textAlign: "right",
    },
    inputsContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#262A34",
        borderRadius: 20,
        height: 60,
        padding: 10,
        margin: 12
    },
    input: {
        height: 60,
        width: 260, 
        color: "#66676C"
    },
    btnSignGoogle: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
        borderRadius: 20,
        height: 40,
        marginTop: 20,
    },
    btnSignFacebook: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#3A579B",
        borderRadius: 20,
        height: 40,
        marginTop: 20,
        marginBottom: 50
    },
    btnPrimary: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#5467FF",
        borderRadius: 20,
        height: 40,
    },
    cryptoWallerLogo: {
        width: 180,
        height: 180,
        marginTop: 20,
        marginBottom: 10
    },
    socialMediasLogo: {
        width: 20,
        height: 20,
        marginEnd: 25
    }
})

export default styles;