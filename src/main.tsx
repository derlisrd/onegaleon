import ScreensContainerProvider from ".";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen } from "./screens";



const {Navigator, Screen} = createNativeStackNavigator();

function Main() {
    return (<ScreensContainerProvider>
        <Navigator initialRouteName="login">
            <Screen name="login" component={LoginScreen} />
        </Navigator>
    </ScreensContainerProvider> );
}

export default Main;