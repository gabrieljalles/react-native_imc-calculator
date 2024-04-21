import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    resultImc:{
        flex:1,
        marginTop: 20,
        paddingTop: 20,
        borderRadius: 50,
        alignItems: "center",
        width: "100%"
    },
    number:{
        fontSize: 48,
        color:"#ff0043",
        fontWeight:"bold",
    },
    information:{ 
        marginTop: 20,
        fontSize: 18,
        color:"#ff0043",
        fontWeight:"bold",
    },
    boxShare:{
        width: "100%",
        alignItems:"center",
        marginBottom: 10,
        justifyContent:"center",
    },
    shareButton:{
        backgroundColor:"#1877f2",
        borderRadius:20,
        paddingBottom:5,
        paddingTop:5,
    },
    shareText:{
        color: "#ffffff",
        fontWeight: "bold",
        paddingHorizontal: 30,
    }
})

export default styles