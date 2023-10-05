import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Screen from "./screen";
import Add from './add';

export type HomeStackParamList = {
    mainhome:undefined,
    add:undefined
}


const Stack = createNativeStackNavigator<HomeStackParamList>();


function Home() {
    return (<Stack.Navigator screenOptions={{ headerShown:false }} >
        <Stack.Screen name="mainhome" component={Screen} />
        <Stack.Screen name="add" component={Add} />
      </Stack.Navigator>);
}



export default Home;