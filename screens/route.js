import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./Auth/login";
const Stack = createNativeStackNavigator()
export default function Route(){
    return(
        <Stack.Navigator>
            <Stack.Screen component={Login} name="login"/>
        </Stack.Navigator>
    )
}