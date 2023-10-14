import 'react-native-gesture-handler';
import { useFonts, Montserrat_100Thin, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import { NavigationContainer } from '@react-navigation/native';

import MainScreens from './src/screens';
import AuthProvider from './src/providers/authprovider';
import ThemeProvider from './src/providers/themeprovider';



export default function App() {
  let [fontsLoaded, fontError] = useFonts({
    Montserrat_100Thin, Montserrat_400Regular, Montserrat_700Bold
  });
  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <NavigationContainer>
      <ThemeProvider>
        <AuthProvider>
          <MainScreens />
        </AuthProvider>
      </ThemeProvider>
    </NavigationContainer>
  );
}

