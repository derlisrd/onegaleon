import 'react-native-gesture-handler';
import * as SplashScreen from 'expo-splash-screen';
import {useFonts,Montserrat_100Thin,Montserrat_400Regular,Montserrat_700Bold} from '@expo-google-fonts/montserrat';
import { useCallback,useEffect } from 'react';
import { Splash } from './src/screens';
import Main from './src/main';
import colors from './src/utils/colors';
import { StatusBar } from 'expo-status-bar';

SplashScreen.preventAutoHideAsync();

function App() {
  let [fontsLoaded] = useFonts({
    Montserrat_100Thin,
    Montserrat_400Regular,
    Montserrat_700Bold,
  });


  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);
  
  useEffect(()=>{
    onLayoutRootView()
  },[onLayoutRootView])

  if (!fontsLoaded ) {
    return <Splash />
  }
  return (
  <>
  <Main/>
  <StatusBar backgroundColor={colors.white} style='dark' />
  </>
  
  );
}

export default App;