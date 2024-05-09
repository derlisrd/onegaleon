import { AuthScreenList } from "screens/list/auth.list";
import { useTheme } from '@react-navigation/native';

import { createBottomTabNavigator, BottomTabScreenProps } from '@react-navigation/bottom-tabs';

import { BottomTapList } from "screens/list/bottom.tap.list";
import Inicio from "./inicio";
import Icon from 'react-native-vector-icons/Octicons'
import Movimientos from "./mov";
import Cuenta from "./cuenta";
import { View } from "react-native";

type Props = BottomTabScreenProps<AuthScreenList, 'homebottomtap'>;

const {Screen,Navigator} = createBottomTabNavigator<BottomTapList>();



function HomeBottomTab() {
    const {colors} = useTheme()
    return <Navigator initialRouteName='inicio'
    screenOptions={{ 
        headerShown:false, 
        tabBarInactiveBackgroundColor:'transparent',
        tabBarStyle: {position : 'absolute', bottom:0,backgroundColor:colors.background,borderWidth:0}
    }}
    >
        <Screen name='inicio' 
            component={Inicio} 
            options={
                {
                    tabBarLabel:'Inicio',
                    tabBarIcon: ({ color }) => (
                        <Icon name="home" color={color} size={24} />
                      )
                }
            } 
        />
        <Screen name='movimientos' 
            component={Movimientos} 
            options={
                {
                    tabBarLabel:'Mov',
                    tabBarIcon: ({ color }) => (
                        <Icon name="rocket" color={color} size={24} />
                      )
                }
            } 
        />
        <Screen name='add' 
            component={Movimientos} 
            options={
                {
                    tabBarLabel:'',
                    tabBarIcon: ({ color , size, focused}) => (
                        <View style={{ position:'absolute',bottom:12, backgroundColor: focused ? color : colors.primary , borderRadius: 24,padding:12 }}>
                            <Icon name="plus-circle" color='#fff' size={36}/>
                        </View>
                      )
                }
            } 
        />
        <Screen name='noti' 
            component={Movimientos} 
            options={
                {
                    tabBarLabel:'Notificacion',
                    tabBarIcon: ({ color }) => (
                        <Icon name="bell" color={color} size={24} />
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
                        <Icon name="person" color={color} size={24} />
                      )
                }
            } 
        />
        </Navigator>
}

export default HomeBottomTab;