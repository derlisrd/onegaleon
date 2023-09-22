import { View, StyleSheet } from "react-native";
import { ButtonPrimary, Input, Title } from "../../../components";
import type { StackScreenProps } from '@react-navigation/stack';
import { GuestStackParamList } from "..";
import SubTitle from "../../../components/text/subtitle";
import TextLink from "../../../components/text/textlink";


type guestScreenNavigationType = StackScreenProps<GuestStackParamList,'login'>



function LoginScreen({navigation}: guestScreenNavigationType) {

    const goRegister = ()=>{
        navigation.navigate('register');
    }

    return (
        <View style={style.container}>
            <Title>Hola</Title>
            <SubTitle>Bienvenido devuelta. Si no tienes una cuenta registrate un momento.</SubTitle>
            <View style={style.inputs}>
                <Input placeholder="Email o usuario" />
                <Input placeholder="Contraseña" />
            </View>
            <View>
                <ButtonPrimary onPress={()=>{}}>ingresar</ButtonPrimary>
            </View>
            <View>
                <TextLink onPress={goRegister}>No tienes una cuenta, registrate aquí. </TextLink>
            </View>
    </View>
    );
}

const style = StyleSheet.create({
    inputs:{
        marginVertical:12,
    },
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})

export default LoginScreen;