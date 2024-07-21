import { View,ImageBackground,Image } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
export default function Skill(){
    return(
        <View style={{flex:1}}>
                        <LinearGradient
            colors={['#AB3A96','#E9659B']} style={{flex:1}} start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}/>

            <Image source={require("../../../assets/image.png")} style={{position:"absolute",alignSelf:"center",marginTop:100}}/>
        </View>
    )
}