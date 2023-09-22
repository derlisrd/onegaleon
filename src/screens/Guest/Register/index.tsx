import { View, StyleSheet } from "react-native";
import { ButtonPrimary, Input, Title } from "../../../components";
import { useState } from "react";
import { GuestStackParamList } from "..";
import { StackScreenProps } from "@react-navigation/stack";
import TextLink from "../../../components/text/textlink";

type guestScreenNavigationType = StackScreenProps<GuestStackParamList,'register'>

function RegisterScreen({navigation}: guestScreenNavigationType) {

    const [form,setForm] = useState({})

    return (
        <View style={style.container}>
            <Title>REGISTRO</Title>
            <View>
                <Input placeholder="Nombre" label="Nombre" inputMode="text" />
                <Input placeholder="user@example.com" label="E-mail" inputMode="email" />
                <Input placeholder="Contraseña" secureTextEntry />
                <Input placeholder="Repetir contraseña" secureTextEntry />
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
        alignItems:'center'
    }
})

export default RegisterScreen;