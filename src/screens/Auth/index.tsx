import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./home";
import SettingsScreen from "./settings";
import ProfileScreen from "./profile";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Feather from "react-native-vector-icons/Feather";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Movimientos from "./movimientos";
import { colors } from "../../utils/colors";
import { AddButton2 } from "../../components";
import AddScreen from "./Add";

const { Navigator, Screen } = createBottomTabNavigator();

function AuthScreens() {
  return (
    <Navigator
      initialRouteName="home"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarInactiveTintColor:colors.black72,
        tabBarInactiveBackgroundColor: colors.yellowLight,
        tabBarStyle: { borderTopWidth: 0, backgroundColor: colors.yellowLight },
        tabBarActiveTintColor: colors.yellowDark,
      }}
    >
        <Screen name="home" component={HomeScreen} 
        options={{  tabBarLabel:'Inicio', tabBarIcon: ({color})=>(<FontAwesome name="home" color={color} size={26} />) }} />
        
        <Screen name="Wallet" component={Movimientos}
        options={{ tabBarLabel:'Movimientos', tabBarIcon: ({color})=>(<MaterialCommunityIcons name="wallet" color={color} size={26} />) }} />

        <Screen name="Add" component={AddScreen}
          options={{
            tabBarActiveBackgroundColor: colors.yellowLight,
            tabBarLabel:'', 
            tabBarIcon: ({color,size,focused})=>(<AddButton2 color={color} focused={focused} size={size} />) 
           }}
        />
        
        <Screen name="Settings" component={SettingsScreen}
        options={{ tabBarLabel:'Config.', tabBarIcon: ({color})=>(<Feather name="settings" color={color} size={26} />) }} />

        <Screen name="Profile" component={ProfileScreen}  
        options={{ tabBarLabel:'Perfil', tabBarIcon: ({color})=>(<FontAwesome name="user-circle-o" color={color} size={26} />) }} />
    </Navigator>
  );
}

export default AuthScreens;
