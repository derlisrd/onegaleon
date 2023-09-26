import { Text, View, StyleSheet } from "react-native";
import { colors } from "../../../utils/colors";

function HomeScreen() {
    return ( <View style={style.container}>
        <Text>HOME PAGE</Text>
    </View> );
}

const style = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: colors.bgcolor
    }
})


export default HomeScreen;