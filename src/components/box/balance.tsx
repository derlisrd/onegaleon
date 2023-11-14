import { Text, View,StyleSheet } from "react-native";
import { helpers } from "../../utils/helpers";
import { colors } from "../../utils/colors";
import { widthScreen } from "../../utils/dimensions";

type Props = {
    balance: number,
    ingresos:number,
    egresos:number
}

function BalanceBox({balance,ingresos,egresos}:Props) {
    return ( <View style={style.container}>
        <Text style={style.balance}>Balance</Text>
        <Text style={style.text}>{helpers.numberFormant(balance)}</Text>
        <View style={style.mov}>
            <View style={style.ingreso}>
                <Text style={style.valores}> + {helpers.numberFormant(ingresos)}</Text>
            </View>
            <View style={style.egreso}>
                <Text style={style.valores}> - {helpers.numberFormant(egresos)}</Text>
            </View>
        </View>
    </View> );
}


const style = StyleSheet.create({
    valores:{
        color: colors.black72,
        fontFamily:'Montserrat_700Bold'
    },
    ingreso:{
        width: widthScreen*0.4,
        backgroundColor:colors.greenPastel,
        padding:12,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:8,
    },
    egreso:{
        width: widthScreen*0.4,
        backgroundColor:colors.redPastel,
        padding:12,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:8,
    },
    mov:{
        flexDirection:'row',
        gap:4
    },
    container:{
        justifyContent:'center',
        alignItems:'center',
        paddingVertical:12
    },
    balance:{
        fontFamily:'Montserrat_400Regular',
        fontSize:14,
        color:colors.black72
    },
    text:{
        fontFamily:'Montserrat_700Bold',
        fontSize:28,
        color: colors.black72,
    }
})

export default BalanceBox;