import { View, StyleSheet, ScrollView } from "react-native";
import { colors } from "../../../utils/colors";
import { HomeStackParamList } from ".";
import { StackScreenProps } from "@react-navigation/stack";
import { AddButton, Loading, MovimientosList, Title,BalanceBox } from "../../../components";
import { useHome } from "./provider";
import { widthScreen } from "../../../utils/dimensions";
import { helpers } from "../../../utils/helpers";
import { Fragment } from "react";




type Props = StackScreenProps<HomeStackParamList, 'mainhome'>

function Screen({ navigation }: Props) {
    const { movimientos, loading, balance, datos } = useHome()



    return (<View style={style.container}>
        <View style={style.container2}>
            {
                loading ? <Loading /> : <Fragment>
                   <View style={style.header} >
                    <Title>{helpers.mesActualString()} </Title>
                    <AddButton onPress={() => { navigation.push('add') }} />
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
        backgroundColor:colors.white,
        paddingTop:8, 
        paddingBottom:12,
        borderTopRightRadius:24,
        borderTopLeftRadius:24
    }
})

export default Screen;