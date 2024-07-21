import { View,Image,TouchableOpacity,Text,FlatList,Dimensions } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import React,{useState} from "react"
import ReactNativeModal from "react-native-modal"
const screenHeight = Dimensions.get("screen").height
const screenWidth = Dimensions.get("screen").width
export default function Education(){
    const [data,setData] = useState([
        {image:require("../../../assets/school1.png"),isPressed:false,type:"Major: Business, Marketing",name:"School 1",courses:[{course:"Marketing Essentials", teach:"edX"},{course:"Google Project Management: Professional Certificate", teach:"Coursera"},{course:"Business Analytics", teach:"Harvard Business Online School"}]}
    ])
    return(
        <View style={{flex:1}}>
            <LinearGradient
            colors={['#AB3A96','#E9659B']} style={{flex:1}} start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}/>

            <View style={{width:"100%",position:"absolute",alignItems:"center",top:60}}>
                <Image style={{width:207.2}} source={require("../../../assets/edu.png")}/>
                <Text style={{fontWeight:"bold",fontSize:40,color:"white"}}>Education</Text>
                <Text style={{fontWeight:"bold",fontSize:20,color:"white",marginTop:10}}>Tap into any courses to see it details</Text>

                <FlatList
                data={data}
                bounces={false}
                keyExtractor={(item,index)=>index.toLocaleString()}
                style={{width:screenWidth,height:screenHeight*0.55,backgroundColor:"white",marginTop:40,padding:20,borderTopLeftRadius:10,borderTopRightRadius:10,borderTopWidth:1}}
                renderItem={({item,index})=>{
                    return(
                        <View>
                        <TouchableOpacity onPress={()=>{
                            const newData = [...data]
                            newData.isPressed = true
                            setData(newData)
                        }} style={{flexDirection:"row"}}>
                        <Image source={item.image}/>
                        <View style={{marginLeft:10}}>
                            <Text style={{fontWeight:"bold",fontSize:16}}>{item.name}</Text>
                            <Text style={{fontSize:15}}>{item.type}</Text>
                        </View>
                    </TouchableOpacity>

                    <ReactNativeModal isVisible={item.isPressed}>
                        <View>
                                
                        </View>
                    </ReactNativeModal>
                    </View>
                    )
                }}/>
            </View>
        </View>
    )
}