import {SafeAreaView} from 'react-native-safe-area-context'
import {Text,View,StyleSheet } from "react-native";
import PrimaryButton from '../../../components/buttons/primary.button';


function LoginScreen() {
    return (<SafeAreaView>
        <View>
            <PrimaryButton onPress={()=>{}}>LOGIN</PrimaryButton>
        </View>
    </SafeAreaView>  );
}


const s = StyleSheet.create({
    container:{

    }
})

export default LoginScreen;