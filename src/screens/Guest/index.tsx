import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './Login';
import RegisterScreen from './Register';
import { DatePicker } from '../../components';

export type GuestStackParamList = {
    login:undefined,
    register:undefined
}

const {Navigator,Screen} = createStackNavigator<GuestStackParamList>();


function GuestScreens() {
    return ( 
        <Navigator initialRouteName={'login'} screenOptions={{ headerShown:false }} >
          <Screen name={'login'} component={LoginScreen} />
          <Screen name={'register'} component={RegisterScreen} />
        </Navigator>
       );
}

export default GuestScreens;