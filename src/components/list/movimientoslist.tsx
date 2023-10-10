import { View, Text , StyleSheet} from "react-native";
import { movimientoType } from "../../models/post";
import { helpers } from "../../utils/helpers";
import Icon from 'react-native-vector-icons/AntDesign' 
type itemsMovimientosType = Array<movimientoType>

interface Props {
    items: itemsMovimientosType
}


function MovimientosList({items}:Props) {
    return ( <View style={style.container}>
        {
            items.map((e,i)=>(
                <View key={i} style={style.item}>
                    <View style={style.detalles}>
                        <Icon name={e.modo===1 ? 'upsquare': 'downsquare'} size={32} color={e.modo===1 ? "#333": "#098"} />
                        <Text style={[style.itemDetalle, style.font]}>{e.detalles}</Text>
                    </View>
                    <View style={style.valor}>
                        <Text style={[style.textValor, style.font]}>{helpers.numberFormant(e.valor ?? '0')}</Text>
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
        backgroundColor:'silver'
    },

    item:{
        paddingVertical:8,
        justifyContent:'space-between',
        flexDirection:'row'
    },
    font:{
        fontFamily:'Montserrat_700Bold',
    },
    detalles:{
        flexDirection:'row',
        alignItems:'flex-start',
        gap:8,
        flexWrap:'wrap',
        marginRight:4
    },
    valor:{

    },
    textValor:{

    },
    itemDetalle:{
        
    }
})

export default MovimientosList;