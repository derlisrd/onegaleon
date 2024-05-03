import { AuthScreenList } from "screens/list/auth.list";
import { MaterialBottomTabScreenProps, createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { BottomTapList } from "screens/list/bottom.tap.list";
import { colors } from "config/colors";
import Inicio from "./inicio";
import Icon from 'react-native-vector-icons/MaterialIcons'
import Movimientos from "./mov";
import Cuenta from "./cuenta";

type Props = MaterialBottomTabScreenProps<AuthScreenList, 'homebottomtap'>;

const {Screen,Navigator} = createMaterialBottomTabNavigator<BottomTapList>();



function HomeBottomTab() {
    return <Navigator initialRouteName='inicio'
    activeIndicatorStyle={{ backgroundColor:'transparent'  }}
    activeColor={colors.primary}
    inactiveColor={colors.gray[2]}
    barStyle={{ backgroundColor:colors.white,borderTopWidth:1, borderTopColor: colors.gray[1] }}
    >
        <Screen name='inicio' 
            component={Inicio} 
            options={
                {
                    tabBarLabel:'Inicio',
                    tabBarIcon: ({ color }) => (
                        <Icon name="home" color={color} size={28} />
                      )
                }
            } 
        />
        <Screen name='movimientos' 
            component={Movimientos} 
            options={
                {
                    tabBarLabel:'Movimientos',
                    tabBarIcon: ({ color }) => (
                        <Icon name="moving" color={color} size={28} />
                      )
                }
            } 
        />
        <Screen name='cuenta' 
            component={Cuenta} 
            options={
                {
                    tabBarLabel:'Cuenta',
                    tabBarIcon: ({ color }) => (
                        <Icon name="person" color={color} size={28} />
                      )
                }
            } 
        />
        </Navigator>
}

export default HomeBottomTab;