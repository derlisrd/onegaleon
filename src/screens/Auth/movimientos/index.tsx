import { Text, View, StyleSheet } from "react-native";

function Movimientos() {
    return ( <View style={styles.container}>
        <Text>Movimientos</Text>
    </View> );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})


export default Movimientos;