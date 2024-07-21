import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Authorize from "./screens/Auth/route";
import Intro from "./screens/Intro";
import Ready from "./screens/Ready";
import RoadMap from "./screens/Roadmap";
import Home from "./screens/Home/route";
const Theme = createNativeStackNavigator()
export default function App(){
    return(
        <NavigationContainer independent={true}>
            <Theme.Navigator initialRouteName="Intro">
                <Theme.Screen component={Intro} name="Intro" options={{headerShown:false}}/>
                <Theme.Screen component={Authorize} name="Auth" options={{headerShown:false}}/>
                <Theme.Screen component={Ready} name="Ready" options={{headerShown:false}}/>
                <Theme.Screen component={RoadMap} name="RoadMap" options={{headerShown:false}}/>
                <Theme.Screen component={Home} name="Home" options={{headerShown:false}}/>
            </Theme.Navigator>
        </NavigationContainer>
    )
}
