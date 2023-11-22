import { createStackNavigator } from "@react-navigation/stack";

import Pantalla from "./screen";
import MovimientosProvider from "./provider";
import ModalFecha from "./modal_fecha";


export type StackMovimientos = {
  main: undefined
  modalfecha: undefined
}

const {Navigator, Screen, Group} = createStackNavigator<StackMovimientos>();

function Movimientos() {
  return (
    <MovimientosProvider>
      <Navigator initialRouteName="main" screenOptions={{ headerShown: false }}>
        <Group>
          <Screen name="main" component={Pantalla} />
        </Group>
        <Group screenOptions={{ presentation: 'modal' }}>
          <Screen name="modalfecha" component={ModalFecha} />
        </Group>
      </Navigator>
    </MovimientosProvider>
  );
}

export default Movimientos;

