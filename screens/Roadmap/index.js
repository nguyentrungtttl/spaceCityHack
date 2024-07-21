import {View,Image,TouchableOpacity,Text} from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { styles } from "./style"
export default function RoadMap({navigation}){
    return(
        <View style={{flex:1}}>
            <LinearGradient
            colors={['#AB3A96','#E9659B']} style={{flex:1}} start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}/>

            <View style={{width:"100%",position:"absolute",top:60,alignItems:"center"}}>
                <View style={{alignItems:"center"}}>
                    <Image style={{opacity:0.8,width:100,height:88}} source={require("../../assets/cup.png")}/>
                    <Text style={[styles.whiteBold,{marginVertical:5}]}>Step 3</Text>
                    <Text style={styles.white}>Competitions</Text>
                </View>

                <Image source={require("../../assets/arrow up.png")} style={{marginVertical:15,width:40,height:76}}/>

                <View style={{alignItems:"center"}}>
                    <Image style={{opacity:0.8,width:100,height:100}} source={require("../../assets/act.png")}/>
                    <Text style={[styles.whiteBold,{marginVertical:5}]}>Step 2</Text>
                    <Text style={styles.white}>Extracurriculars</Text>
                </View>

                <Image source={require("../../assets/arrow up.png")} style={{marginVertical:15,width:40,height:76}}/>

                <View style={{alignItems:"center"}}>
                    <Image style={{opacity:0.8,width:202,height:100}} source={require("../../assets/school.png")}/>
                    <Text style={[styles.whiteBold,{marginVertical:5}]}>Step 3</Text>
                    <Text style={styles.white}>Education</Text>
                </View>
            </View>

            <TouchableOpacity onPress={()=>navigation.navigate("Home")} style={styles.button}>
                <Image source={require("../../assets/hat.png")}/>
                <Text style={[styles.whiteBold,{left:10}]}>Go to Education</Text>
            </TouchableOpacity>
        </View>
    )
}