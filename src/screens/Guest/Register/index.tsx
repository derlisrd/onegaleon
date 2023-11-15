import { View, StyleSheet, Alert, ScrollView } from "react-native";
import { ButtonPrimary, Input, Title } from "../../../components";
import { useState } from "react";
import { GuestStackParamList } from "..";
import { StackScreenProps } from "@react-navigation/stack";
import TextLink from "../../../components/text/textlink";
import { widthScreen } from "../../../utils/dimensions";
import LoadingTransparent from "../../../components/loadings/loadingtransparent";
import SubTitle from "../../../components/text/subtitle";
import { helpers } from "../../../utils/helpers";
import { APICALLER } from "../../../services/api";
import { colors } from "../../../utils/colors";
import BouncyCheckbox from "react-native-bouncy-checkbox";

type guestScreenNavigationType = StackScreenProps<GuestStackParamList,'register'>

function RegisterScreen({navigation}: guestScreenNavigationType) {
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState({code:0,msg:''})
    const [check,setCheck] = useState(false)
    const initialForm = {
        name:'',
        email:'',
        password:'',
        password_confirm:'',
    }
    const [form,setForm] = useState(initialForm)
    const change = (t:string,n:string)=>{
        setForm({...form,[n]:t})
    }

    const validarEnviar = async()=>{
        if(form.name==='' || form.name.length < 2){
            setError({code:1,msg:'Ingrese el nombre'})
            return
        }
        if(!helpers.validarMail(form.email)){
            setError({code:2,msg:'Ingrese el email correctamente'})
            return
        }
        if(form.password==='' || form.password.length < 8){
            setError({code:3,msg:'Ingrese la contraseña con al menos 6 caracteres'})
            return
        }
        if(form.password!==form.password_confirm){
            setError({code:5,msg:'Las contraseñas deben coincidir'})
            return
        }
        if(!check){
            setError({code:6,msg:'Debe aceptar los términos'})
            return
        }
        setError({code:0, msg:''})

        setLoading(true)
        const res = await APICALLER.register(form)
        setLoading(false)
        if(res.success){
            Alert.alert('Listo','Ya puedes entrar con tu cuenta')
            navigation.pop()
        }else{
            //console.log(res.message);
            let message = '';
            if(res.status === 422){
                message = 'Email ya ha sido tomado'
                setError({code:2,msg:'Email ya ha sido tomado'})
            }else{
                message = 'Error de internet'
            }
           Alert.alert('Error',message)
           return
        }
    }


    return (
        <View style={style.container}>
            {
                loading && <LoadingTransparent message="Cargando..." />
            }
            <Title>REGISTRO</Title>
            <SubTitle>Rellena este formulario para registrarte.</SubTitle>
            
            <View style={style.inputs}>
                <Input placeholder="Nombre" label="Nombre" error={error.code===1} errorMessage={error.code===1 ? error.msg : ''} onChangeText={(t)=>{change(t,'name')}} inputMode="text" />
                <Input placeholder="user@example.com" error={error.code===2} errorMessage={error.code===2 ? error.msg : ''} onChangeText={(t)=>{change(t,'email')}} label="E-mail" inputMode="email" />
                <Input placeholder="Contraseña" label="Contraseña" error={error.code===3 || error.code===5} errorMessage={error.code===3 ? error.msg : ''} onChangeText={(t)=>{change(t,'password')}} secureTextEntry />
                <Input placeholder="Repetir contraseña" error={ error.code===5} errorMessage={error.code===5 ? error.msg : ''} label="Repetir contraseña" onChangeText={(t)=>{change(t,'password_confirm')}} secureTextEntry />
                <BouncyCheckbox
                    size={24}
                    fillColor={colors.black72}
                    unfillColor="#FFFFFF"
                    text="Acepto los términos y políticas"
                    iconStyle={{ borderColor: colors.black72 }}
                    innerIconStyle={{ borderWidth: 2 }}
                    textStyle={{ fontFamily: "Montserrat_400Regular" }}
                    onPress={(isChecked: boolean) => { setCheck(isChecked)}}
                    />
            </View>
            <View>
                <ButtonPrimary onPress={validarEnviar}>registrarme</ButtonPrimary>
            </View>
            <View>
                <TextLink onPress={()=>{navigation.pop()}}>Ya tengo cuenta, loguearme </TextLink>
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        width: widthScreen,
        backgroundColor:colors.bgcolor
    },
    inputs:{
        width: widthScreen*0.9,
    }
})

export default RegisterScreen;