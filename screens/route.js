import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./Auth/Login";
const Stack = createNativeStackNavigator()
export default function Route(){
    return(
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen component={Login} name="Login"/>
        </Stack.Navigator>
    )
}