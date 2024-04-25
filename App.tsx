import 'react-native-gesture-handler';
import { useFonts, Montserrat_100Thin, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import {  PrimaryButton, SafeArea } from '@components';


export default function App() {
  let [fontsLoaded, fontError] = useFonts({Montserrat_100Thin, Montserrat_400Regular, Montserrat_700Bold});
  
  if (!fontsLoaded && !fontError) return null;
  
  return <SafeArea>
    <PrimaryButton center>boton</PrimaryButton>
  </SafeArea>
}

