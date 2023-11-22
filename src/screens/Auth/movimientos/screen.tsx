import { SafeAreaView } from "react-native-safe-area-context";
import { StackMovimientos } from ".";
import { StackScreenProps } from "@react-navigation/stack";
import { Pressable,View,Text, StyleSheet } from "react-native";

type Props = StackScreenProps<StackMovimientos,'main'>

function Screen({navigation}:Props) {
    return (<SafeAreaView>
        <Pressable onPress={() => navigation.navigate('modalfecha')}>
            <View style={styles.container}>
                <Text>Abrir modal</Text>
            </View>
        </Pressable>
    </SafeAreaView>);
}


const styles = StyleSheet.create({
    container:{
        backgroundColor:'orange',
        padding:12
    }
})

export default Screen;