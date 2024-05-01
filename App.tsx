import "react-native-gesture-handler";
import { useFonts,Montserrat_100Thin,Montserrat_400Regular,Montserrat_700Bold } from "@expo-google-fonts/montserrat";

import AuthProvider from "providers/auth.provider";
import ScreenMaster from "screens/screens.master";
import SplashScreen from "screens/common/splash.screen";

export default function App() {
  let [fontsLoaded] = useFonts({Montserrat_100Thin,Montserrat_400Regular,Montserrat_700Bold,});
  
  if (!fontsLoaded) return <SplashScreen />

  return (
    
      <AuthProvider>
          <ScreenMaster />
      </AuthProvider>
  );
}

