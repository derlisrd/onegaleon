import { Pressable, View, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome' //pluscircleo
import { colors } from "../../utils/colors";
interface Props {
    onPress?: ()=>void
}

function RefreshButton({onPress}:Props) {
    return ( <Pressable onPress={onPress} style={style.button}>
        <View>
            <Icon name='refresh' size={32} color={colors.black72} />
        </View>
    </Pressable> );
}

const style = StyleSheet.create({
    button:{
        borderRadius:48,
        backgroundColor:colors.yellow,
        padding:8
    }
})

export default RefreshButton;