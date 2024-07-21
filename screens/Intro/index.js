import {View,Text,Image,TouchableOpacity} from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { styles } from "./style"
export default function Intro({navigation}){
    return(
        <View style={{flex:1}}>
            <LinearGradient
            colors={['#DCA7CC', '#FBAAC7']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={{flex:1}}/>

            <View style={{width:"100%",position:"absolute",top:40}}>
                <Image style={{alignSelf:"flex-end",right:20,width:204,height:139.665}} source={require("../../assets/logo.png")}/>
                <View style={{width:"100%",alignItems:"center"}}>
                    <Text style={styles.boldText}>PathWISE</Text>
                    <Text style={styles.slogan}>Wise paths to your success</Text>

                    <TouchableOpacity onPress={()=>navigation.navigate("Auth")} style={[styles.button,{marginTop:20}]}>
                        <Text style={styles.whiteBold}>Get started</Text>
                    </TouchableOpacity>

                </View>
            </View>
            <Text style={[styles.slogan,{position:"absolute",bottom:10,alignSelf:"center"}]}>Version 1.0</Text>
        </View>
    )
}