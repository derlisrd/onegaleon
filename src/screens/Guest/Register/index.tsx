import { View, StyleSheet } from "react-native";
import { ButtonPrimary, Input, Title } from "../../../components";
import { useState } from "react";
import { GuestStackParamList } from "..";
import { StackScreenProps } from "@react-navigation/stack";
import TextLink from "../../../components/text/textlink";
import { widthScreen } from "../../../utils/dimensions";
import LoadingTransparent from "../../../components/loadings/loadingtransparent";
import SubTitle from "../../../components/text/subtitle";

type guestScreenNavigationType = StackScreenProps<GuestStackParamList,'register'>

function RegisterScreen({navigation}: guestScreenNavigationType) {
    const [loading,setLoading] = useState(false)
    const [form,setForm] = useState({})

    return (
        <View style={style.container}>
            {
                loading && <LoadingTransparent message="Cargando..." />
            }
            <Title>REGISTRO</Title>
            <SubTitle>Rellena este formulario para registrarte.</SubTitle>
            
            <View style={style.inputs}>
                <Input placeholder="Nombre" label="Nombre" inputMode="text" />
                <Input placeholder="user@example.com" label="E-mail" inputMode="email" />
                <Input placeholder="Contraseña" label="Contraseña" secureTextEntry />
                <Input placeholder="Repetir contraseña" label="Repetir contraseña" secureTextEntry />
            </View>
            <View>
                <ButtonPrimary onPress={()=>{}}>registrarme</ButtonPrimary>
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
        width: widthScreen
    },
    inputs:{
        width: widthScreen*0.9
    }
})

export default RegisterScreen;