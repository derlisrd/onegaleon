import Icon from "react-native-vector-icons/MaterialIcons"; //pluscircleo
import { colors } from "../../utils/colors";
import { View, StyleSheet } from "react-native";

type Props = {
  size: number;
  color: string;
  focused:boolean
};

function AddButton2({ size, color,focused }: Props) {
  return (
    <View style={[style.container, {backgroundColor: focused ?  colors.yellowDark : colors.yellow }]}>
      <Icon name="add" size={size} color={focused ? colors.white : colors.black72} />
    </View>
  );
}

const style = StyleSheet.create({
    container:{
        width:60,
        height:60,
        borderRadius:30,
        justifyContent:'center',
        alignItems:'center',
        marginBottom:18
    }
})


export default AddButton2;
