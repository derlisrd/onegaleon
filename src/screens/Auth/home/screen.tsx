import { View, StyleSheet,ScrollView } from "react-native";
import { colors } from "../../../utils/colors";
import FloatActionButton from "../../../components/buttons/floatactionbutton";
import { HomeStackParamList } from ".";
import { StackScreenProps } from "@react-navigation/stack";
import { Title } from "../../../components";
import MovimientosList from "../../../components/list/movimientoslist";
import { useHome } from "./provider";



type Props = StackScreenProps<HomeStackParamList,'mainhome'>

function Screen({navigation}: Props) {
    const {movimientos} = useHome()

    return ( <View style={style.container}>
            <View style={style.container2}>
                <Title>Octubre:</Title>
            <ScrollView>
                <MovimientosList items={movimientos} />
            </ScrollView>
            </View>
        
        
        <FloatActionButton onPress={()=>{ navigation.push('add')}} />
    </View>  );
}
const style = StyleSheet.create({
    container:{
        flex:1,
        paddingTop: 24,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: colors.bgcolor
    },
    container2:{
        marginTop:24
    }
})

export default Screen;