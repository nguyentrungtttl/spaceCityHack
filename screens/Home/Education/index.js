import { View,Image,TouchableOpacity,Text,FlatList,Dimensions } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import React,{useState} from "react"
import ReactNativeModal from "react-native-modal"
const screenHeight = Dimensions.get("screen").height
const screenWidth = Dimensions.get("screen").width
export default function Education(){
    const [data,setData] = useState([
        {image:require("../../../assets/school1.png"),isPressed:false,type:"Major: Business, Marketing",name:"Course 1",courses:[{course:"Marketing Essentials", teach:"edX"},{course:"Google Project Management: Professional Certificate", teach:"Coursera"},{course:"Business Analytics", teach:"Harvard Business Online School"}]},
        {image:require("../../../assets/school1.png"),isPressed:false,type:"Major: Computer science, Data science",name:"Course 2",courses:[{course:"Intro to AI", teach:"edX"},{course:"Road to Machine Learning", teach:"Coursera"},{course:"EDA", teach:"Harvard Business Online School"}]},

    ])
    return(
        <View style={{flex:1}}>
            <LinearGradient
            colors={['#AB3A96','#E9659B']} style={{flex:1}} start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}/>

            <View style={{width:"100%",position:"absolute",alignItems:"center",top:60}}>
                <Image style={{width:207.2}} source={require("../../../assets/edu.png")}/>
                <Text style={{fontSize:40,color:"white"}}>Education</Text>
                <Text style={{fontSize:20,color:"white",marginTop:10}}>Tap into any courses to see it details</Text>

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
                            newData[index].isPressed = true
                            setData(newData)
                        }} style={{flexDirection:"row"}}>
                        <Image source={item.image}/>
                        <View style={{marginLeft:10}}>
                            <Text style={{fontSize:16}}>{item.name}</Text>
                            <Text style={{fontSize:15}}>{item.type}</Text>
                        </View>
                    </TouchableOpacity>

                    <View style={{borderBottomWidth:1,marginVertical:15,borderBottomColor:"gray"}}></View>

                    <ReactNativeModal isVisible={item.isPressed} style={{alignSelf:"center",backgroundColor:"white",padding:10,borderTopLeftRadius:50,borderTopRightRadius:50,maxHeight:screenHeight*0.5,position:"absolute",bottom:60,    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5}} backdropOpacity={0} onBackdropPress={()=>{
                                                    const newData = [...data]
                                                    newData[index].isPressed = false
                                                    setData(newData)
                    }}>
                        <View>
                            <Text style={{fontSize:18,alignSelf:"center",fontWeight:"bold"}}>Courses</Text>
                            <FlatList
                            data={item.courses}
                            keyExtractor={(item,index)=>index.toLocaleString()}
                            style={{width:screenWidth,height:screenHeight*0.4}}
                            renderItem={({item,index})=>{
                                return(
                                    <View>
                                    <TouchableOpacity style={{marginHorizontal:15,flexDirection:"row",alignItems:"center"}}>
                                        <Image style={{width:48,height:48}} source={require("../../../assets/credit.png")}/>
                                        <View style={{marginLeft:10}}>
                                            <Text style={{fontWeight:"bold",width:screenWidth*0.8,fontSize:18}}>{item.course}</Text>
                                            <Text style={{fontSize:16}}>{item.teach}</Text>
                                        </View>
                                    </TouchableOpacity>

                                    <View style={{borderBottomWidth:1,marginVertical:15,width:"90%",alignSelf:"center"}}/>
                                    </View>
                                )
                            }}/>
                        </View>
                    </ReactNativeModal>
                    </View>
                    )
                }}/>
            </View>
        </View>
    )
}