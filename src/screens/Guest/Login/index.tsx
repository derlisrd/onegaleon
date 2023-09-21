import { View, Text, StyleSheet } from "react-native";
import { ButtonPrimary, Input, Title } from "../../../components";
import ButtonSecondary from "../../../components/buttons/buttonsecondary";
import Icon from 'react-native-vector-icons/FontAwesome';
import type { StackScreenProps } from '@react-navigation/stack';
import { GuestStackParamList } from "..";


type guestScreenNavigationType = StackScreenProps<GuestStackParamList,'login'>



function LoginScreen({navigation}: guestScreenNavigationType) {

    const goRegister = ()=>{
        navigation.navigate('register');
    }

    return (
        <View style={style.container}>
            <Title>Hola</Title>
            <Icon name="rocket" size={30} color="#900" />
            <View>
                <Input placeholder="Email o usuario" />
                <Input placeholder="Contraseña" />
            </View>
            <View>
                <ButtonPrimary onPress={()=>{}}>ingresar</ButtonPrimary>
                <ButtonSecondary onPress={goRegister}>registrarme</ButtonSecondary>

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

export default LoginScreen;