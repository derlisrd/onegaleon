import { createStackNavigator } from "@react-navigation/stack";

import Screen from "./screen";
import MovimientosProvider from "./provider";


export type StackLista = {
  main: undefined;
};

const Stack = createStackNavigator<StackLista>();

function Movimientos() {
  return (
    <MovimientosProvider>
      <Stack.Navigator initialRouteName="main" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="main" component={Screen} />
      </Stack.Navigator>
    </MovimientosProvider>
  );
}

export default Movimientos;

