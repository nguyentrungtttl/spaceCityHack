import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Route from "./screens/route";
const Theme = createNativeStackNavigator()
export default function App(){
    return(
        <NavigationContainer independent={true}>
            <Theme.Navigator>
                <Theme.Screen/>
            </Theme.Navigator>
        </NavigationContainer>
    )
}
