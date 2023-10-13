import { Pressable } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { colors } from "../../utils/colors";

type Props = {
    onPress?:()=>void
}
function ButtonBack({onPress}:Props) {
    return ( <Pressable onPress={onPress}>
        <Ionicons name="arrow-back" size={32} color={colors.primary} />
    </Pressable>  );
}

export default ButtonBack;