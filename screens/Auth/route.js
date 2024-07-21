import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./Login";
import SignUp from "./SignUp";
const Stack = createNativeStackNavigator()
export default function Authorize(){
    return(
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen component={Login} name="Login"/>
            <Stack.Screen component={SignUp} name="SignUp"/>
        </Stack.Navigator>
    )
}