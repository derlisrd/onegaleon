import { View, StyleSheet,ScrollView } from "react-native";
import { colors } from "../../../utils/colors";
import { HomeStackParamList } from ".";
import { StackScreenProps } from "@react-navigation/stack";
import { FloatActionButton, Loading, MovimientosList, Title } from "../../../components";
import { useHome } from "./provider";
import { widthScreen } from "../../../utils/dimensions";




type Props = StackScreenProps<HomeStackParamList,'mainhome'>

function Screen({navigation}: Props) {
    const {movimientos,loading} = useHome()


    
    return ( <View style={style.container}>
            <View style={style.container2}>
                {
                    loading ? <Loading /> : <>
                    <Title>Octubre:</Title>
                <ScrollView style={style.scrollview}>
                    <MovimientosList items={movimientos} />
                </ScrollView>
                    </>
                }
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