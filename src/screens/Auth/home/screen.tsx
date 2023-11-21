import { View, StyleSheet, ScrollView } from "react-native";
import { colors } from "../../../utils/colors";
import { HomeStackParamList } from ".";
import { StackScreenProps } from "@react-navigation/stack";
import {  Loading, MovimientosList, Title,BalanceBox, RefreshButton } from "../../../components";
import { useHome } from "./provider";
import { widthScreen } from "../../../utils/dimensions";
import { helpers } from "../../../utils/helpers";
import { Fragment } from "react";




type Props = StackScreenProps<HomeStackParamList, 'mainhome'>

function Screen({ navigation }: Props) {
    const { movimientos, loading, balance, datos, getMovimientos } = useHome()



    return (<View style={style.container}>
        <View style={style.container2}>
            {
                loading ? <Loading /> : <Fragment>
                   <View style={style.header} >
                    <Title>{helpers.mesActualString()} </Title>
                    <RefreshButton onPress={getMovimientos} />
                   </View>
                    <BalanceBox ingresos={datos.ingresos} egresos={datos.egresos} balance={balance} />
                    <ScrollView style={style.scrollview}>
                        <MovimientosList items={movimientos} />
                    </ScrollView>
                </Fragment>
            }
        </View>

    </View>);
}
const style = StyleSheet.create({
    header:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:12
    },
    container: {
        flex: 1,
        width: widthScreen,
        paddingTop: 24,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.bgcolor,
    },
    container2: {
        marginTop: 24,
        paddingHorizontal: 12,
    },
    scrollview: {
        width: widthScreen,
        backgroundColor:colors.bgcolor,
        paddingTop:8, 
        paddingBottom:12,
        borderTopRightRadius:8,
        borderTopLeftRadius:8
    }
})

export default Screen;