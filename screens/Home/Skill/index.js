import { View,ImageBackground,Image,TouchableOpacity,Text } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
export default function Skill({navigation}){
    return(
        <View style={{flex:1}}>
                        <LinearGradient
            colors={['#AB3A96','#E9659B']} style={{flex:1}} start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}/>

            <Image source={require("../../../assets/image.png")} style={{position:"absolute",alignSelf:"center",marginTop:100}}/>

            <View style={{position:"absolute",bottom:10,flexDirection:"row",width:"100%",alignSelf:"center",alignItems:"center",justifyContent:"space-around"}}>
                <TouchableOpacity style={{marginBottom:10,padding:20,width:180,heighr:50,backgroundColor:"#B9509A",alignItems:"center"}} onPress={()=>navigation.navigate("project")}>
                    <Text style={{fontWeight:"bold",fontSize:15,color:"white",textAlign:"center"}}>Create a new project</Text>
                </TouchableOpacity>

                <TouchableOpacity  style={{marginBottom:10,padding:20,width:180,heighr:50,backgroundColor:"#B9509A",alignItems:"center"}} onPress={()=>navigation.navigate("project")}>
                    <Text  style={{fontWeight:"bold",fontSize:15,color:"white",textAlign:"center"}}>Join an existence project</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}