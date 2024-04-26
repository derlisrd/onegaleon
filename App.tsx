import "react-native-gesture-handler";
import { useFonts,Montserrat_100Thin,Montserrat_400Regular,Montserrat_700Bold } from "@expo-google-fonts/montserrat";
import { NavigationContainer, DefaultTheme, DarkTheme } from "@react-navigation/native";
import { useColorScheme } from 'react-native';
import AuthProvider from "providers/auth.provider";
import ScreenMaster from "screens/screens.master";


export default function App() {
  let [fontsLoaded] = useFonts({Montserrat_100Thin,Montserrat_400Regular,Montserrat_700Bold,});
  const scheme = useColorScheme();
  if (!fontsLoaded) return null;

  return (
    <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
      <AuthProvider>
        <ScreenMaster />
      </AuthProvider>
    </NavigationContainer>
  );
}

