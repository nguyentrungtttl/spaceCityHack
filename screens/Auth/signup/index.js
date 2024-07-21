import {View,Text,TextInput,SafeAreaView,TouchableOpacity,Platform,Dimensions,TouchableWithoutFeedback,Keyboard,KeyboardAvoidingView,Image} from "react-native"
import { Svg,Path } from "react-native-svg"
import { LinearGradient } from "expo-linear-gradient"
import { styles } from "./style"
import React,{useState} from "react"
import Checkbox from "expo-checkbox"
const screenWidth= Dimensions.get("screen").width
const screenHeight = Dimensions.get("screen").height

export default function SignUp(){
    const [isChecked,setIsChecked]=useState(false)
    return(
        <View style={{flex:1}}>
            <LinearGradient
            colors={['#AB3A96','#E9659B']} style={{flex:1}} start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}/>

            <View style={{alignItems:"center",position:"absolute",marginTop:screenHeight*0.15,alignSelf:"center"}}>
                <Text style={styles.title}>Register</Text>
                <Text style={styles.whitetext}>Create your account</Text>

                <View style={{width:"100%",marginTop:10,alignItems:"center"}}>
                <View style={{flexDirection:"row"}}>
                    <Image style={styles.textinputinlineimage} source={require("../../../assets/username.png")}/>
                    <TextInput placeholder="Email address" placeholderTextColor={"gray"} style={styles.textinput}/>
                </View>

                <View style={{flexDirection:"row"}}>
                    <Image style={styles.textinputinlineimage} source={require("../../../assets/mail.png")}/>
                    <TextInput placeholder="Email address" placeholderTextColor={"gray"} style={styles.textinput}/>
                </View>

                <View style={{flexDirection:"row"}}>
                    <Image style={styles.textinputinlineimage} source={require("../../../assets/lock.png")}/>
                    <TextInput placeholder="Password" placeholderTextColor={"gray"} style={styles.textinput}/>
                </View>

                <View style={{flexDirection:"row"}}>
                    <Image style={styles.textinputinlineimage} source={require("../../../assets/lock.png")}/>
                    <TextInput placeholder="Password" placeholderTextColor={"gray"} style={styles.textinput}/>
                </View>

                <View style={{width:"90%",flexDirection:"row",left:10,marginVertical:30}}>
                    <Checkbox
                        value={isChecked}
                        onValueChange={setIsChecked}
                        color={isChecked ? '#d142f5' : undefined}
                        style={{backgroundColor:"white",borderWidth:0}}
                    />

                    <View style={{flexDirection:"row",left:10}}>
                        <Text style={styles.whiteBold}>I agree to </Text>
                        <TouchableOpacity>
                            <Text style={styles.whiteBoldUnderlinedText}>Terms and Conditions</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            <TouchableOpacity style={styles.button}>
                <Text style={[styles.whiteBold,{fontSize:17}]}>Sign Up</Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}