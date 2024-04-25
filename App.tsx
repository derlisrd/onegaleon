import "react-native-gesture-handler";
import {
  useFonts,
  Montserrat_100Thin,
  Montserrat_400Regular,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";
import { NavigationContainer } from "@react-navigation/native";
import AuthProvider from "providers/auth.provider";
import ScreenMaster from "screens/screens.master";

export default function App() {
  let [fontsLoaded, fontError] = useFonts({
    Montserrat_100Thin,
    Montserrat_400Regular,
    Montserrat_700Bold,
  });

  if (!fontsLoaded && !fontError) return null;

  return (
    <NavigationContainer>
      <AuthProvider>
        <ScreenMaster />
      </AuthProvider>
    </NavigationContainer>
  );
}
