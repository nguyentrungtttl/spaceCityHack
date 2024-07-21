import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Skill from ".";
import Project from "../../Project";
import Success from "../../Success";
const Stack = createNativeStackNavigator()

export default function SkillRoute(){
    return(
        <Stack.Navigator initialRouteName="Skill" screenOptions={{headerShown:false}}>
            <Stack.Screen component={Skill} name="Skill"/>
            <Stack.Screen component={Project} name="project"/>
            <Stack.Screen component={Success} name="Success"/>

        </Stack.Navigator>
    )
}