import { View, Text, StyleSheet } from "react-native";
import { ButtonPrimary, Input, Title } from "../../../components";
import Icon from 'react-native-vector-icons/FontAwesome';
import { useState } from "react";

function RegisterScreen() {

    const [form,setForm] = useState({})

    return (
        <View style={style.container}>
            <Title>REGISTRO</Title>
            <Icon name="rocket" size={30} color="#900" />
            <View>
                <Input placeholder="Nombre" />
                <Input placeholder="Email" />
                <Input placeholder="Contraseña" />
                <Input placeholder="Repetir contraseña" />
            </View>
            <View>
                <ButtonPrimary onPress={()=>{}}>registrarme</ButtonPrimary>
            </View>
            <View>

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