import { useAuth } from "providers/auth.provider";
import PublicScreens from "./public";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from 'expo-status-bar';
import { useThemeStore } from "store/theme.store";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AuthScreens from "./auth";

function ScreensMaster() {
  const { isAuth } = useAuth();
  //const scheme = useColorScheme(); theme={scheme === 'dark' ? DarkTheme : DefaultTheme}

  const { theme } = useThemeStore();

  return (
    <NavigationContainer theme={theme}>
      <SafeAreaProvider>{isAuth ? <AuthScreens /> : <PublicScreens />}</SafeAreaProvider>
      <StatusBar style={theme.dark ? 'light' : 'dark'} />
    </NavigationContainer>
  );
}

export default ScreensMaster;
