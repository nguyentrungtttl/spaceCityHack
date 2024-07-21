import {View,Image,Text,TouchableOpacity,Dimensions} from "react-native"
const screenHeight = Dimensions.get("screen").height
const screenWidth = Dimensions.get("screen").width

export default function Project(){
    return (
        <View style={{flex:1}}>
            <Image source={require("../../assets/ninhbinh.png")} style={{width:screenWidth,height:screenHeight*0.6}}/>
            <Image source={require("../../assets/star.png")} style={{position:"absolute",top:screenHeight*0.47,left:15}}/>

            <Text style={{zIndex:1,position:"absolute",top:screenHeight*0.48,left:15,fontWeight:"bold",color:"white",fontSize:19}}>Management In Ninh Binh</Text>
            <View style={{position:"absolute",width:screenWidth,height:screenHeight*0.4,zIndex:1,bottom:0,borderTopLeftRadius:20,borderTopRightRadius:20,backgroundColor:"white"}}>
                <Text style={{fontWeight:"bold",color:"#B9509A",marginTop:15,marginLeft:15,fontSize:18}}>About</Text>
                <Text style={{marginLeft:15,marginRight:20,marginTop:5,fontSize:16}}>Volunteering for local people to preserve 
traditions, landscapes, and culture at Ninh 
Binh city.</Text>
<View style={{marginTop:10, marginLeft:15,flexDirection:"row",alignItems:"center"}}>
    <Image source={require("../../assets/location.png")}/>
    <Text style={{marginLeft:10}}>Location: Mang Chiêng, Ninh Binh Province, Viet Nam</Text>
</View>

<View style={{marginTop:10, marginLeft:15,flexDirection:"row",alignItems:"center"}}>
    <Image source={require("../../assets/var.png")}/>
    <Text style={{marginLeft:10}}>Vacancies: Researcher, Project Moderator</Text>
</View>

<View  style={{marginTop:10, marginLeft:15,flexDirection:"row",alignItems:"center"}}>
    <Image source={require("../../assets/dur.png")}/>
    <Text style={{marginLeft:10}}>Duration: 24th May - 31st August</Text>
</View>

<TouchableOpacity style={{backgroundColor:"#B9509A",width:"50%",alignSelf:"center",padding:15,marginTop:20,alignItems:"center",borderRadius:20}}>
    <Text style={{fontWeight:"bold",fontSize:18,color:"white"}}>How fit is it?</Text>
</TouchableOpacity>
            </View>
        </View>
    )
}