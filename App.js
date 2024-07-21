import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Authorize from "./screens/Auth/route";
import Intro from "./screens/Intro";
import Ready from "./screens/Ready";
import RoadMap from "./screens/Roadmap";
import Home from "./screens/Home/route";
import Project from "./screens/Project";
const Theme = createNativeStackNavigator()
import Quiz from "./screens/Quiz";
import Chatbot from "./screens/Chatbot";
import Success from "./screens/Success";
import Failure from "./screens/Failure";


export default function App() {
    return (
        <NavigationContainer independent={true}>
            <Theme.Navigator initialRouteName="Quiz">
                <Theme.Screen component={Project} name="Project" options={{headerShown:false}}/>
                <Theme.Screen component={Failure} name="Failure" options={{ headerShown: true }} />
                <Theme.Screen component={Success} name="Success" options={{ headerShown: true }} />
                <Theme.Screen component={Chatbot} name="Chatbot" options={{ headerShown: true }} />
                <Theme.Screen component={Intro} name="Intro" options={{ headerShown: false }} />
                <Theme.Screen component={Authorize} name="Auth" options={{ headerShown: false }} />
                <Theme.Screen component={Ready} name="Ready" options={{ headerShown: false }} />
                <Theme.Screen component={RoadMap} name="RoadMap" options={{ headerShown: false }} />
                <Theme.Screen component={Home} name="Home" options={{ headerShown: false }} />
                <Theme.Screen component={Quiz} name="Quiz" options={{ headerShown: true }} />
            </Theme.Navigator>
        </NavigationContainer>
    )
}
