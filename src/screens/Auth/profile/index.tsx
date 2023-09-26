import { StyleSheet, Text, View } from "react-native";
import { useAuthProvider } from "../../../providers/authprovider";
import { colors } from "../../../utils/colors";
import { ButtonPrimary } from "../../../components";

function ProfileScreen() {
    const {userData,setLogout} = useAuthProvider()
    return ( <View style={style.container}>
        <View style={style.info}>
            <Text>Nombre: {userData.email}</Text>
            <Text>Email: {userData.email}</Text>
        </View>
        <View style={style.buttons}>
            <ButtonPrimary onPress={setLogout}>Cerrar Sesion</ButtonPrimary>
        </View>
    </View> );
}

const style = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: colors.bgcolor
    },
    info:{
        flex:9,
        justifyContent:'flex-end'
    },
    buttons:{
        flex:2,
        justifyContent:'center'
    }
})

export default ProfileScreen;