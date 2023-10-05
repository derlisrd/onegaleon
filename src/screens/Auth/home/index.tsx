import { createStackNavigator } from '@react-navigation/stack';

import Screen from "./screen";
import Add from './add';

export type HomeStackParamList = {
    mainhome:undefined,
    add:undefined
}


const Stack = createStackNavigator<HomeStackParamList>();


function Home() {
    return (<Stack.Navigator screenOptions={{ headerShown:true }} >
        <Stack.Screen name="mainhome" component={Screen}  />
        <Stack.Screen name="add"  component={Add} options={{ presentation:'modal' }} />
      </Stack.Navigator>);
}



export default Home;