
import { TextInput, TextInputProps, View } from "react-native";
import { styles } from "./styles";
import { ReactNode } from "react";

interface InputProps extends TextInputProps{
    icon?: ReactNode
}


function Input({icon,placeholder}:InputProps) {
    return ( <View style={styles.main}>
        <View style={styles.container}>
            {icon && <View style={styles.icon}>{icon}</View>}
            <TextInput 
                style={styles.input}
                placeholder={placeholder}
            />
        </View>
    </View> );
}

export default Input;