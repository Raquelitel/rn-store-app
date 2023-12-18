import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Login from "../pages/Login";
import Signup from "../pages/Signup";


type AuthStackParamList = {
    Signup: undefined,
    Login: undefined,
}

const Stack = createNativeStackNavigator<AuthStackParamList>();

export const AuthNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Signup" component={Signup}/>
            <Stack.Screen name="Login" component={Login}/>
        </Stack.Navigator>

    )
}