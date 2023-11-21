import { createStackNavigator } from "@react-navigation/stack";

import Screen from "./screen";
import Add from "./add";
import HomeProvider from "./provider";

export type HomeStackParamList = {
  mainhome: undefined;
  add: undefined;
};

const Stack = createStackNavigator<HomeStackParamList>();

function Home() {
  return (
    <HomeProvider>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="mainhome" component={Screen} />
      </Stack.Navigator>
    </HomeProvider>
  );
}

export default Home;
