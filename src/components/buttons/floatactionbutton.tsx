import { Pressable, View, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/AntDesign' //pluscircleo
import { colors } from "../../utils/colors";
interface Props {
    onPress?: ()=>void
}

function FloatActionButton({onPress}:Props) {
    return ( <Pressable onPress={onPress} style={style.button}>
        <View>
            <Icon name='pluscircle' size={48} color={colors.black72} />
        </View>
    </Pressable> );
}

const style = StyleSheet.create({
    button:{
        position:'absolute',
        right:32,
        top:48,
        borderRadius:48
    }
})

export default FloatActionButton;