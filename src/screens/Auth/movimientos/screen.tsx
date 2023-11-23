import { SafeAreaView } from "react-native-safe-area-context";
import { StackMovimientos } from ".";
import { StackScreenProps } from "@react-navigation/stack";
import { View, StyleSheet, ScrollView } from "react-native";
import { heightScreen, widthScreen } from "../../../utils/dimensions";
import {  ButtonSm, Loading, MovimientosList, SubTitle, Title2 } from "../../../components";
import { useMovimientos } from "./provider";

type Props = StackScreenProps<StackMovimientos,'main'>

function Screen({navigation}:Props) {
    const {fecha,loading,movimientos} = useMovimientos()
    return (<SafeAreaView>
        <View style={styles.titulo}>
            <Title2>Movimientos</Title2>
            <SubTitle>Rango de fecha: {fecha.inicio} {fecha.fin}</SubTitle>
            <View style={styles.boton}>
                <ButtonSm onPress={() => navigation.navigate('modalfecha')}>Seleccionar fecha</ButtonSm>
            </View>
        </View>
        <View style={styles.movimientos}>
            {
                loading ? <Loading /> : <ScrollView style={styles.scrollview}>
                <MovimientosList items={movimientos} />
            </ScrollView>
            }
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
        height:'100%',
        paddingBottom:12
    },
    scrollview: {
        width: widthScreen,
        maxHeight: heightScreen *0.68
    }
})

export default Screen;