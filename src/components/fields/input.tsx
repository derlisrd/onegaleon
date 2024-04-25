
import { TextInput, View } from "react-native";
import { styles } from "./styles";

function Input() {
    return ( <View style={styles.container}>
        <TextInput 
            style={styles.input}
        />
    </View> );
}

export default Input;