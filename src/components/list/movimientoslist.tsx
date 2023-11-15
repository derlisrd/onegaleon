import { View, Text , StyleSheet} from "react-native";
import { helpers } from "../../utils/helpers";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons' 
import { getMovimientos } from "../../models/get";
import { widthScreen } from "../../utils/dimensions";
import { colors } from "../../utils/colors";

interface Props {
    items: getMovimientos
}


function MovimientosList({items}:Props) {
    return ( <View style={style.container}>
        {
            items.map((e,i)=>(
                <View key={i} style={style.item}>
                    <View style={style.detalles}>
                        <View style={[style.iconoContainer, e.modo === 1 ? style.iconoGreen : style.iconoRed]}>
                        <Icon name={e.modo===1 ? 'cash-fast': 'hand-coin-outline'} size={28} color={colors.white} />
                        </View>
                        <View style={style.textosView} >
                            <Text style={[style.font]}>{e.modo===1 ? 'Recibiste:' : 'Pagaste:'}</Text>
                            <Text style={[style.itemDetalle, style.fontBold]}>{e.detalles}</Text>
                        </View>
                    </View>
                    <View style={style.valor}>
                        <Text style={[style.fecha, style.font]}>{helpers.fechadMY(e.created_at)}</Text>
                        <Text style={[e.modo===1 ? style.ingreso : style.egreso, style.fontBold,style.textvalor]}>{helpers.numberFormant(e.valor)}</Text>
                    </View>
                </View>
            ))
        }
    </View> );
}

const style = StyleSheet.create({
    container:{
        width: widthScreen*0.99,
        flex:1,
        paddingHorizontal:8,
        justifyContent:'center'
    },
    iconoRed:{
        backgroundColor: colors.redPastel,
    },
    iconoGreen:{
        backgroundColor: colors.greenPastel
    },
    iconoContainer:{
        padding:4,
        borderRadius:8
    },
    item:{
        paddingVertical:12,
        paddingHorizontal:4,
        borderRadius:8,
        justifyContent:'space-between',
        flexDirection:'row',
        flexWrap:'wrap',
        backgroundColor: colors.white,
        marginVertical:4
    },
    font:{
        fontFamily:'Montserrat_400Regular'
    },
    fontBold:{
        fontFamily:'Montserrat_700Bold',
    },
    detalles:{
        flexDirection:'row',
        gap:2,
        marginRight:4
    },
    textosView:{
        flexWrap:'wrap',
        flexDirection:'column',
    },
    valor:{

    },
    textvalor:{
        fontSize:12,
    },
    fecha:{
        fontSize:12
    },
    egreso:{
        color:'red'
    },
    ingreso:{
        color:'green'
    },
    itemDetalle:{
        maxWidth: widthScreen*0.55,
        flexWrap:'wrap',
        fontSize:11,
        color:colors.semiTransparent
    }
})

export default MovimientosList;