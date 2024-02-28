import { ActivityIndicator, StyleSheet, View } from "react-native";
import colors from "../../utils/colors";

function LoadingScreen() {
    return (<View style={style.container}>
        <ActivityIndicator />
    </View>  );
}

const style = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:colors.white,
        justifyContent:'center',
        alignItems:'center'
    }
})

export default LoadingScreen;