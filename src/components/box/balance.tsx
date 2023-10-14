import { Text, View,StyleSheet } from "react-native";
import { helpers } from "../../utils/helpers";

type Props = {
    balance: number
}

function BalanceBox({balance}:Props) {
    return ( <View style={style.container}>
        <Text style={style.text}>{helpers.numberFormant(balance)}</Text>
    </View> );
}


const style = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
        paddingVertical:12
    },
    text:{
        fontSize:32,
        fontFamily:'Montserrat_700Bold'
    }
})

export default BalanceBox;