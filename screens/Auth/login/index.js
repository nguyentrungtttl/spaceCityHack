import {View,Text,TextInput,SafeAreaView,TouchableOpacity,Platform,Dimensions,TouchableWithoutFeedback,Keyboard,KeyboardAvoidingView,Image} from "react-native"
import { Svg,Path } from "react-native-svg"
import { LinearGradient } from "expo-linear-gradient"
import { styles } from "./style"
const screenWidth= Dimensions.get("screen").width
const screenHeight = Dimensions.get("screen").height
export default function Login({navigation}){
    return(


    <SafeAreaView style={styles.container}>
        <Image source={require("../../../assets/waving.png")} style={styles.image}/>

        <View style={[styles.box,{height:screenHeight*0.78}]}>
            <Text style={styles.title}>Welcome back!</Text>

            <View style={{width:"100%",marginTop:10,alignItems:"center"}}>
                <View style={{flexDirection:"row"}}>
                    <Image style={styles.textinputinlineimage} source={require("../../../assets/mail.png")}/>
                    <TextInput placeholder="Email address" placeholderTextColor={"gray"} style={styles.textinput}/>
                </View>

                <View style={{flexDirection:"row"}}>
                    <Image style={styles.textinputinlineimage} source={require("../../../assets/lock.png")}/>
                    <TextInput placeholder="Password" placeholderTextColor={"gray"} style={styles.textinput}/>
                </View>
            </View>

            <TouchableOpacity onPress={()=>navigation.navigate("Ready")} style={[styles.button,{marginTop:20}]}>
                <Text style={styles.whiteBold}>Login</Text>
            </TouchableOpacity>

            <Text style={styles.whitetext}>Don't have an account?</Text>

            <TouchableOpacity onPress={()=>navigation.navigate("SignUp")} style={styles.button}>
                <Text style={styles.whiteBold}>Register</Text>
            </TouchableOpacity>

            <TouchableOpacity>
                <Text style={styles.whiteBoldUnderlinedText}>Forgot Password</Text>
            </TouchableOpacity>
        </View>
    </ SafeAreaView>
    )
}