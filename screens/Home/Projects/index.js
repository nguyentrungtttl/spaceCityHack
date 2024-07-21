import { View,Image,TouchableOpacity,Text,FlatList,Dimensions } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import React,{useState} from "react"
import ReactNativeModal from "react-native-modal"
import { useNavigation } from "@react-navigation/native"
const screenHeight = Dimensions.get("screen").height
const screenWidth = Dimensions.get("screen").width
export default function Projects({navigation}){
    // const navigation = useNavigation()
    const [data,setData] = useState([
        {image:require("../../../assets/volun.png"),isPressed:false,date:"dd/mm/yyyy",name:"Volunteer for education"},
        {image:require("../../../assets/volun.png"),isPressed:false,date:"dd/mm/yyyy",name:"Volunteer for education"},
        {image:require("../../../assets/volun.png"),isPressed:false,date:"dd/mm/yyyy",name:"Volunteer for education"},
        {image:require("../../../assets/volun.png"),isPressed:false,date:"dd/mm/yyyy",name:"Volunteer for education"},
    ])
    return(
        <View style={{flex:1}}>
            <LinearGradient
            colors={['#AB3A96','#E9659B']} style={{flex:1}} start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}/>

            <View style={{width:"100%",position:"absolute",alignItems:"center",top:60}}>
                <Image style={{width:207.2}} source={require("../../../assets/proj.png")}/>
                <Text style={{fontWeight:"bold",fontSize:40,color:"white"}}>Projects</Text>
                <Text style={{fontWeight:"bold",fontSize:20,color:"white",marginTop:10}}>Tap into any activities to see it details</Text>

                <FlatList
                data={data}
                bounces={false}
                keyExtractor={(item,index)=>index.toLocaleString()}
                style={{width:screenWidth,height:screenHeight*0.55,backgroundColor:"white",marginTop:40,padding:20,borderTopLeftRadius:10,borderTopRightRadius:10,borderTopWidth:1}}
                renderItem={({item,index})=>{
                    return(
                        <View>
                        <TouchableOpacity onPress={()=>navigation.navigate("project")} style={{flexDirection:"row"}}>
                        <Image source={item.image}/>
                        <View style={{marginLeft:10}}>
                            <Text style={{fontWeight:"bold",fontSize:16}}>{item.name}</Text>
                            <Text style={{fontSize:15}}>{item.date}</Text>
                        </View>
                    </TouchableOpacity>

                    <View style={{borderBottomWidth:1,marginVertical:15,borderBottomColor:"gray"}}></View>


                    
                    </View>
                    )
                }}/>
            </View>
        </View>
    )
}