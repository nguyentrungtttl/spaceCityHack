import {View,Text,TextInput,SafeAreaView,TouchableOpacity,Platform,Dimensions,TouchableWithoutFeedback,Keyboard,KeyboardAvoidingView,Image} from "react-native"
import { Svg,Path, LinearGradient } from "react-native-svg"
import { styles } from "./style"
const screenWidth= Dimensions.get("screen").width
const screenHeight = Dimensions.get("screen").height
export default function Login(){
    return(

    <SafeAreaView style={styles.container}>
        <Image source={require("../../../assets/waving.png")} style={styles.image}/>
        <View style={[styles.box,{height:screenHeight*0.78}]}>

        </View>
        <Svg width={"100%"} height={"100"} viewBox="0 0 100 25"style={{position:"absolute",top:200}}>
            <Path d="M0 0 Q 50 50 100 0 Z" fill={"#E65791"}/>
        </Svg>
    </SafeAreaView>
    )
}