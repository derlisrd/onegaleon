import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeScreen from './home';
import SettingsScreen from './settings';
import ProfileScreen from './profile';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Movimientos from './movimientos';


const {Navigator,Screen} = createMaterialBottomTabNavigator();

function AuthScreens() {
    return (
      <Navigator initialRouteName='home' 
      activeColor="#f0edf6"
      inactiveColor="#3e2465"
      barStyle={{ backgroundColor: '#694fad' }}
      >
        <Screen name="home" component={HomeScreen} 
        options={{ tabBarLabel:'Inicio', tabBarIcon: ({color})=>(<MaterialCommunityIcons name="home" color={color} size={26} />) }} />
        
        <Screen name="Wallet" component={Movimientos}
        options={{ tabBarLabel:'Movimientos', tabBarIcon: ({color})=>(<MaterialCommunityIcons name="wallet" color={color} size={26} />) }} />
        
        <Screen name="Settings" component={SettingsScreen}
        options={{ tabBarLabel:'Config.', tabBarIcon: ({color})=>(<MaterialIcons name="settings" color={color} size={26} />) }} />

        <Screen name="Profile" component={ProfileScreen}  
        options={{ tabBarLabel:'Perfil', tabBarIcon: ({color})=>(<FontAwesome name="user-circle-o" color={color} size={26} />) }} />
      </Navigator>
    );
  }

  export default AuthScreens;