import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    formContext: {
        width:"100%",
        height:"100%",
        bottom:0,
        backgroundColor:"#fff",
        alignItems: "center",
        marginTop: 65,
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
    },
    form:{
        width: "100%",
        height: "auto",
        padding: 15,
    },
    formLabel:{
        color:"#000",
        fontSize: 18,
        paddingLeft:20,
    },
    formInput:{
        width:"90%",
        borderRadius: 10,
        backgroundColor:"#f6f6f6",
        height: 40,
        margin: 12,
        paddingLeft: 10,
        placeholderTextColor: '#BBBBBB',
    },
    buttonCalculator:{
        borderRadius: 25,
        marginLeft:12,
        alignItems: "center",
        width: "90%",
        backgroundColor: "#ff0043",
        marginTop:20,
        padding:10,
    },
    textButtonCalculator:{
        fontSize:22,
        fontWeight:"bold",
        color:"#fff",
        
    },
    errorMessage:{
        fontSize: 12,
        color: "red",
        fontWeight:"bold",
        paddingLeft:20,
    },
    exhibitionResultImc:{
        width:"100%",
        height: "50%"
    },
    listImcs:{
        marginTop:20,
    },
    resultImcItem:{
        color:"red",
        fontSize:20,
    },
    textResultItemList:{
        fontSize:16,
        height:50,
        width: "100%",
        paddingRight:20,
    }

});

export default styles