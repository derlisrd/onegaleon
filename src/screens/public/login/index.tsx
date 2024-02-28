
import { View } from "react-native";
import { Input, InputPass, LoadingScreen, PrimaryButton } from '../../../components';
import useForm from './useForm';
import s from './styles'
import api from "../../../services/api";

function LoginScreen() {

    const { hidePassword, handleHidePassword, setEmail, email,password, setPassword, validate,error, loading,setLoading } = useForm()

    const attemtlogin = async()=>{
        if( ! validate()) return false;
        setLoading(true)
        const res = await api.login({email,password})
        setLoading(false)
        console.log(res); 
    }

    if(loading) return <LoadingScreen />

    return (
        <View style={s.container}>
            <Input placeholder='E-mail' autoCapitalize="none" onChangeText={setEmail} error={error.code===1} errorMessage={error.message} />
            <InputPass placeholder='Password'  onChangeText={setPassword} secureTextEntry={hidePassword} onPress={handleHidePassword} />
            <PrimaryButton onPress={attemtlogin}>LOGIN</PrimaryButton>
        </View>
    );
}




export default LoginScreen;