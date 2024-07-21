import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#E65791"
    },
    textinput:{
        marginTop:20,
        backgroundColor:"white",
        padding:20,
        width:"80%",
        paddingLeft:55,
        borderRadius:50,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        // fontWeight:'20',
    },
    textinputinlineimage:{
        position:"absolute",
        zIndex:1,
        top:38,
        left:20
    },
    box:{
        width:"100%",
        zIndex:0,
        backgroundColor:"#AB3A96",
        alignItems:"center",
        position:"absolute",
        bottom:0
    },
    image:{
        position:"absolute",
        top:50,
        alignSelf:"center"
    },
    button:{
        backgroundColor:"#333333",
        padding:13,
        width:124,
        alignItems:"center",
        borderRadius:50
    },
    title:{
        marginTop:30,
        // fontWeight:"bold",
        fontSize:40,
        color:"white",
        
    },
    whitetext:{
        // fontWeight:300,
        color:"white",
        fontSize:17,
        marginVertical:15
    },
    whiteBoldUnderlinedText:{
        textDecorationLine:"underline",
        color:"white",
        // fontWeight:"bold",
        fontSize:16,
        marginTop:20
    },
    whiteBold:{
        // fontWeight:"bold",
        color:"white",
        fontSize:17
    }
})