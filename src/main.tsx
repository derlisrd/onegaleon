import ScreensContainerProvider from "./screen.container.provider";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen } from "./screens";



const {Navigator, Screen} = createNativeStackNavigator();

function Main() {
    return (<ScreensContainerProvider>
        <Navigator initialRouteName="login"
            screenOptions={{headerShown:false}}
        >
            <Screen name="login" component={LoginScreen} />
        </Navigator>
    </ScreensContainerProvider> );
}

export default Main;