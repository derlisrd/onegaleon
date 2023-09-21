import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeScreen from './home';
import SettingsScreen from './settings';
import ProfileScreen from './profile';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


const {Navigator,Screen} = createMaterialBottomTabNavigator();

function AuthScreens() {
    return (
      <Navigator>
        <Screen name="Home" component={HomeScreen} 
        options={{ tabBarLabel:'Inicio', tabBarIcon: ({color})=>(<MaterialCommunityIcons name="home" color={color} size={26} />) }} />
        
        <Screen name="Wallet" component={ProfileScreen}
        options={{ tabBarLabel:'Billetera', tabBarIcon: ({color})=>(<MaterialCommunityIcons name="wallet" color={color} size={26} />) }} />
        
        <Screen name="Settings" component={SettingsScreen}
        options={{ tabBarLabel:'Config.', tabBarIcon: ({color})=>(<MaterialIcons name="settings" color={color} size={26} />) }} />

        <Screen name="Profile" component={ProfileScreen}  
        options={{ tabBarLabel:'Perfil', tabBarIcon: ({color})=>(<FontAwesome name="user-circle-o" color={color} size={26} />) }} />
      </Navigator>
    );
  }

  export default AuthScreens;