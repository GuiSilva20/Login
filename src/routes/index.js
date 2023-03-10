import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Welcome from '../pages/welcome'
import Signin from '../pages/signin'
import Register from '../pages/register'
const Stack = createNativeStackNavigator();

export default function Routes() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Welcome"
                component={Welcome}
                options={{ 
                    headerShown: false
                 }}
            />
            <Stack.Screen
                name="SignIn"
                component={Signin}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="Register"
                component={Register}
                options={{
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    )
}
