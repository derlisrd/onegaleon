import { ActivityIndicator, View } from "react-native";
import { colors } from "../../utils/colors";

function Loading(){
    return <View>
        <ActivityIndicator  size='large' color={colors.primary}/>
    </View>
}

export default Loading