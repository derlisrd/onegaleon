import { SafeAreaView } from "react-native-safe-area-context";
import { StackMovimientos } from ".";
import { StackScreenProps } from "@react-navigation/stack";
import { View,Text, StyleSheet } from "react-native";
import { widthScreen } from "../../../utils/dimensions";
import { ButtonPrimary, ButtonSm, SubTitle, Title2 } from "../../../components";
import { useMovimientos } from "./provider";

type Props = StackScreenProps<StackMovimientos,'main'>

function Screen({navigation}:Props) {
    const {fecha} = useMovimientos()
    return (<SafeAreaView>
        <View style={styles.titulo}>
            <Title2>Movimientos</Title2>
            <SubTitle>Rango de fecha: {fecha.inicio} {fecha.fin}</SubTitle>
            <View style={styles.boton}>
                <ButtonSm onPress={() => navigation.navigate('modalfecha')}>Seleccionar fecha</ButtonSm>
            </View>
        </View>
        <View style={styles.movimientos}>

        </View>

    </SafeAreaView>);
}


const styles = StyleSheet.create({
    titulo:{
        width: widthScreen,
        justifyContent:'center'
    },
    boton:{
        paddingHorizontal:32
    },
    movimientos:{
        flex:1
    }
})

export default Screen;