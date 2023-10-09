import { View, Text } from "react-native";
import { movimientoType } from "../../models/post";

type itemsMovimientosType = Array<movimientoType>

interface Props {
    items: itemsMovimientosType
}


function MovimientosList({items}:Props) {
    return ( <View>
        {
            items.map((e,i)=>(
                <View key={i}>
                    <Text>{e.detalles}</Text>
                </View>
            ))
        }
    </View> );
}

export default MovimientosList;