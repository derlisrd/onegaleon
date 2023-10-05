import { Text, View, StyleSheet } from "react-native";
import { colors } from "../../../utils/colors";
import FloatActionButton from "../../../components/buttons/floatactionbutton";
import { HomeStackParamList } from ".";
import { StackScreenProps } from "@react-navigation/stack";


type Props = StackScreenProps<HomeStackParamList,'mainhome'>

function Screen({navigation}: Props) {
    return ( <View style={style.container}>
        <Text>HOME screen</Text>
        <FloatActionButton onPress={()=>{ navigation.push('add')}} />
    </View>  );
}
const style = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: colors.bgcolor
    }
})

export default Screen;