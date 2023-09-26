import { Text, View, StyleSheet } from "react-native";
import { colors } from "../../../utils/colors";

function SettingsScreen() {
    return ( <View style={style.container}>
        <Text>SETTINGS</Text>
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


export default SettingsScreen;