import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeScreen from './home';
import SettingsScreen from './settings';
import ProfileScreen from './profile';

const {Navigator,Screen} = createMaterialBottomTabNavigator();

function AuthScreens() {
    return (
      <Navigator>
        <Screen name="Home" component={HomeScreen} />
        <Screen name="Settings" component={SettingsScreen} />
        <Screen name="Wallet" component={ProfileScreen} />
        <Screen name="Profile" component={ProfileScreen} />
      </Navigator>
    );
  }

  export default AuthScreens;