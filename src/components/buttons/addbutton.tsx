import { Pressable, View, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/AntDesign' //pluscircleo
import { colors } from "../../utils/colors";
interface Props {
    onPress?: ()=>void
}

function AddButton({onPress}:Props) {
    return ( <Pressable onPress={onPress} style={style.button}>
        <View>
            <Icon name='pluscircle' size={40} color={colors.black72} />
        </View>
    </Pressable> );
}

const style = StyleSheet.create({
    button:{
        borderRadius:48
    }
})

export default AddButton;