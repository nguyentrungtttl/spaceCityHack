import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Projects from ".";
import Project from "../../Project";
const Stack = createNativeStackNavigator()

export default function ProjectRoute(){
    return(
        <Stack.Navigator initialRouteName="Projects" screenOptions={{headerShown:false}}>
            <Stack.Screen component={Projects} name="Projects"/>
            <Stack.Screen component={Project} name="project"/>
        </Stack.Navigator>
    )
}