import { Pressable, View, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/AntDesign' //pluscircleo
import { colors } from "../../utils/colors";
interface Props {
    onPress?: ()=>void
}

function FloatActionButton({onPress}:Props) {
    return ( <Pressable onPress={onPress} style={style.button}>
        <View>
            <Icon name='pluscircleo' size={60} color={colors.white} />
        </View>
    </Pressable> );
}

const style = StyleSheet.create({
    button:{
        position:'absolute',
        right:32,
        bottom:32,
        borderRadius:48,
        borderColor:colors.primary,
        borderWidth:1,
        backgroundColor:colors.semiTransparent
    }
})

export default FloatActionButton;