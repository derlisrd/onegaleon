import { View, StyleSheet,ScrollView } from "react-native";
import { colors } from "../../../utils/colors";
import FloatActionButton from "../../../components/buttons/floatactionbutton";
import { HomeStackParamList } from ".";
import { StackScreenProps } from "@react-navigation/stack";
import { Title } from "../../../components";
import MovimientosList from "../../../components/list/movimientoslist";
import { useHome } from "./provider";
import { widthScreen } from "../../../utils/dimensions";
import { useEffect } from "react";



type Props = StackScreenProps<HomeStackParamList,'mainhome'>

function Screen({navigation}: Props) {
    const {movimientos} = useHome()

    useEffect(()=>{
        //console.log(movimientos);
        
    },[movimientos])
    
    return ( <View style={style.container}>
            <View style={style.container2}>
                <Title>Octubre:</Title>
                <ScrollView style={style.scrollview}>
                    <MovimientosList items={movimientos} />
                </ScrollView>
            </View>
        
        
        <FloatActionButton onPress={()=>{ navigation.push('add')}} />
    </View>  );
}
const style = StyleSheet.create({
    container:{
        flex:1,
        width: widthScreen,
        paddingTop: 24,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: colors.bgcolor
    },
    container2:{
        marginTop:24,
        paddingHorizontal:12,
    },
    scrollview:{
       
        width: widthScreen,
        
    }
})

export default Screen;