import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./home";
import SettingsScreen from "./settings";
import ProfileScreen from "./profile";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Feather from "react-native-vector-icons/Feather";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Movimientos from "./movimientos";
import { colors } from "../../utils/colors";

const { Navigator, Screen } = createBottomTabNavigator();

function AuthScreens() {
  return (
    <Navigator
      initialRouteName="home"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarInactiveBackgroundColor: colors.bgcolor,
        tabBarStyle: { borderTopWidth: 0, backgroundColor: colors.black72 },
        tabBarActiveTintColor: colors.bgcolor,
      }}
    >
        <Screen name="home" component={HomeScreen} 
        options={{  tabBarLabel:'Inicio', tabBarIcon: ({color})=>(<FontAwesome name="home" color={color} size={26} />) }} />
        
        <Screen name="Wallet" component={Movimientos}
        options={{ tabBarLabel:'Movimientos', tabBarIcon: ({color})=>(<MaterialCommunityIcons name="wallet" color={color} size={26} />) }} />
        
        <Screen name="Settings" component={SettingsScreen}
        options={{ tabBarLabel:'Config.', tabBarIcon: ({color})=>(<Feather name="settings" color={color} size={26} />) }} />

        <Screen name="Profile" component={ProfileScreen}  
        options={{ tabBarLabel:'Perfil', tabBarIcon: ({color})=>(<FontAwesome name="user-circle-o" color={color} size={26} />) }} />
    </Navigator>
  );
}

export default AuthScreens;
