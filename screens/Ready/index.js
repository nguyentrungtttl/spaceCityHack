import {View,Text,TouchableOpacity,TouchableWithoutFeedback,Dimensions} from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { styles } from "./styles"
const screenHeight= Dimensions.get("screen").height
export default function Ready({navigation}){
    return(
        <TouchableWithoutFeedback style={{flex:1}} onPress={()=>navigation.navigate("RoadMap")}>
        <View style={{flex:1}}>
            <LinearGradient
            colors={['#AB3A96','#E9659B']} style={{flex:1}} start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}/>

            <View style={{width:"100%",position:"absolute",alignItems:"center",justifyContent:"center",alignSelf:"center",height:screenHeight}}>
                <View style={styles.box}>
                    <Text style={styles.boldText}>Are you ready?</Text>
                    <Text style={styles.nor}>Let's see what's the roadmap for you!</Text>
                </View>

            </View>

            <Text style={styles.whiteText}>Tap anywhere to continue</Text>
        </View>
        </TouchableWithoutFeedback>
    )
}