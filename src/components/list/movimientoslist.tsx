import { View, Text , StyleSheet} from "react-native";
import { helpers } from "../../utils/helpers";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons' 
import { getMovimientos } from "../../models/get";

interface Props {
    items: getMovimientos
}


function MovimientosList({items}:Props) {
    return ( <View style={style.container}>
        {
            items.map((e,i)=>(
                <View key={i} style={style.item}>
                    <View style={style.detalles}>
                        <Icon name={e.modo===1 ? 'cash-fast': 'receipt'} size={32} color={e.modo===1 ? "#098": "#e85a4d"} />
                        <View style={style.textosView} >
                            <Text style={[style.font]}>{e.modo===1 ? 'Recibiste:' : 'Pagaste:'}</Text>
                            <Text style={[style.itemDetalle, style.fontBold]}>{e.detalles}</Text>
                        </View>
                    </View>
                    <View style={style.valor}>
                        <Text style={[style.fecha, style.font]}>{helpers.fechadMY(e.created_at)}</Text>
                        <Text style={[e.modo===1 ? style.ingreso : style.egreso, style.fontBold]}>{helpers.numberFormant(e.valor)}</Text>
                    </View>
                </View>
            ))
        }
    </View> );
}

const style = StyleSheet.create({
    container:{
        width:'100%',
        flex:1,
        paddingHorizontal:18,
    },

    item:{
        paddingVertical:12,
        justifyContent:'space-between',
        flexDirection:'row',
        borderBottomWidth:1,
        borderColor:'silver'
    },
    font:{
        fontFamily:'Montserrat_400Regular'
    },
    fontBold:{
        fontFamily:'Montserrat_700Bold',
    },
    detalles:{
        flexDirection:'row',
        alignItems:'flex-start',
        gap:8,
        flexWrap:'wrap',
        marginRight:4
    },
    textosView:{
        flexDirection:'column',
        flexWrap:'wrap'
    },
    valor:{

    },
    fecha:{

    },
    egreso:{
        color:'red'
    },
    ingreso:{
        color:'green'
    },
    itemDetalle:{
        flex:1
    }
})

export default MovimientosList;