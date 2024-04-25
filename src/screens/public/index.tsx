import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './login';

const Stack = createNativeStackNavigator();


function PublicScreens() {
    return <Stack.Navigator screenOptions={{headerShown:false}} >
    <Stack.Screen name='login' component={LoginScreen} />
    <Stack.Screen name='inicio' component={LoginScreen} />
  </Stack.Navigator>
}

export default PublicScreens;