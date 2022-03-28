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
    input: {
        backgroundColor: "#262A34",
        borderRadius: 20,
        height: 60,
        padding: 10,
        margin: 12
    },
    btnSignGoogle: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
        height: 40,
        marginTop: 20,
    },
    btnSignFacebook: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#3A579B",
        height: 40,
        marginTop: 20,
        marginBottom: 50
    },
    btnPrimary: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#5467FF",
        height: 40,
    }
})

export default styles;