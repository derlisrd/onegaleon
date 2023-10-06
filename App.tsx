import 'react-native-gesture-handler';
import { useFonts, Montserrat_100Thin, Montserrat_400Regular, Montserrat_700Bold  } from '@expo-google-fonts/montserrat';
import { NavigationContainer } from '@react-navigation/native';

import MainScreens from './src/screens';
import AuthProvider from './src/providers/authprovider';
import { StatusBar } from 'expo-status-bar';
import { colors } from './src/utils/colors';




export default function App() {
  let [fontsLoaded, fontError] = useFonts({
    Montserrat_100Thin, Montserrat_400Regular, Montserrat_700Bold
  });
  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <NavigationContainer>
      <AuthProvider>
        <MainScreens />
      </AuthProvider>
      <StatusBar backgroundColor={colors.bgcolor} style='dark'  />
    </NavigationContainer>
  );
}

