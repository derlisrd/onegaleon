import { View, StyleSheet, ScrollView } from "react-native";
import { colors } from "../../../utils/colors";
import { HomeStackParamList } from ".";
import { StackScreenProps } from "@react-navigation/stack";
import { FloatActionButton, Loading, MovimientosList, Title } from "../../../components";
import { useHome } from "./provider";
import { widthScreen } from "../../../utils/dimensions";
import { helpers } from "../../../utils/helpers";
import BalanceBox from "../../../components/box/balance";
import { Fragment } from "react";




type Props = StackScreenProps<HomeStackParamList, 'mainhome'>

function Screen({ navigation }: Props) {
    const { movimientos, loading, balance } = useHome()



    return (<View style={style.container}>
        <View style={style.container2}>
            {
                loading ? <Loading /> : <Fragment>
                    <Title>{helpers.mesActualString()}: </Title>
                    <BalanceBox balance={balance} />
                    <ScrollView style={style.scrollview}>
                        <MovimientosList items={movimientos} />
                    </ScrollView>
                </Fragment>
            }
        </View>
        <FloatActionButton onPress={() => { navigation.push('add') }} />
    </View>);
}
const style = StyleSheet.create({
    container: {
        flex: 1,
        width: widthScreen,
        paddingTop: 24,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.bgcolor
    },
    container2: {
        marginTop: 24,
        paddingHorizontal: 12,
    },
    scrollview: {
        width: widthScreen,
    }
})

export default Screen;