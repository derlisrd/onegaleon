import { Pressable, View } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'
interface HeaderBackProps {
    onPress?: ()=>void
}

function HeaderBack( {onPress} : HeaderBackProps) {
    return <View style={{paddingVertical:12, paddingHorizontal:8, width:'100%'}}>
        <Pressable onPress={onPress}>
            <Icon name="chevron-back" size={24} />
        </Pressable>
    </View>
}

export default HeaderBack;