import { View, StyleSheet, Text } from "react-native";
import { ButtonPrimary, ButtonSecondary, Input, InputPass, Title } from "../../../components";
import type { StackScreenProps } from '@react-navigation/stack';
import { GuestStackParamList } from "..";
import SubTitle from "../../../components/text/subtitle";
import TextLink from "../../../components/text/textlink";
import { widthScreen } from "../../../utils/dimensions";
import { useState } from "react";
import { APICALLER } from "../../../services/api";
import LoadingTransparent from "../../../components/loadings/loadingtransparent";
import { colors } from "../../../utils/colors";
import { Alert } from "react-native";
import { useAuthProvider } from "../../../providers/authprovider";


type guestScreenNavigationType = StackScreenProps<GuestStackParamList,'login'>



function LoginScreen({navigation}: guestScreenNavigationType) {
    const {setLogin} = useAuthProvider()
    const [showPass,setShowPass] = useState(true)
    const [email,setEmail] = useState('demo@demo.com')
    const [pass,setPass] = useState('demo12345')
    const [error,setError] = useState({code:0,msg:''})
    const [loading,setLoading] = useState(false)
    const goRegister = ()=>{
        navigation.navigate('register');
    }

    const tryLogin = async()=>{
        if(email===''){
            setError({code:1,msg:'Ingrese e-mail'})
            return
        }
        if(pass===''){
            setError({code:2,msg:'Ingrese contraseña'})
            return
        }
        setError({code:0,msg:''})
        setLoading(true)
        const res = await APICALLER.login({email,password:pass})
        setLoading(false)
        if(res.success){
            setLogin(res.results)
        }
        else{
            Alert.alert('Error',res.message)
        }
        
    }

    return (
        <View style={style.container}>
            {
                loading && <LoadingTransparent message="Cargando..." />
            }
            <Title>Hola</Title>
            <SubTitle>Bienvenido devuelta. Si no tienes una cuenta registrate un momento.</SubTitle>
            <View style={style.inputs}>
                <Input placeholder="Email o usuario" error={error.code===1} errorMessage={error.code===1 ? error.msg : ''} value={email} onChangeText={setEmail} label="Ingresa email o usuario:" />
                <InputPass onPress={()=>{setShowPass(!showPass)}} secureTextEntry={showPass} placeholder="Contraseña" error={error.code===2} errorMessage={error.code===2 ? error.msg : ''} autoCapitalize="none" label="Ingresa tu contraseña" value={pass} onChangeText={setPass}  />
            </View>
            <View>
                <ButtonPrimary onPress={tryLogin}>ingresar</ButtonPrimary>
            </View>
            <View style={style.registerContainer}>
                <Text>No tienes una cuenta?</Text>
                <ButtonSecondary onPress={goRegister}>Registrate</ButtonSecondary>
            </View>
    </View>
    );
}

const style = StyleSheet.create({
    registerContainer:{
        justifyContent:'center', alignItems:'center', marginTop:8
    },
    negrita:{
        fontWeight:'bold'
    },
    inputs:{
        marginVertical:12,
        width: widthScreen*0.9
    },
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:colors.bgcolor
    }
})

export default LoginScreen;