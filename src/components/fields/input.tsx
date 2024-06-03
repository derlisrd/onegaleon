
import { TextInput, TextInputProps, View } from "react-native";
import { styles } from "./styles";
import { ReactNode } from "react";
import { useTheme } from "@react-navigation/native";

interface InputProps extends TextInputProps{
    icon?: ReactNode
}


function Input({icon,placeholder}:InputProps) {
    const {colors} = useTheme()
    return ( <View style={styles.main}>
        <View style={[styles.container, {backgroundColor: colors.card}]}>
            {icon && <View style={styles.icon}>{icon}</View>}
            <TextInput 
                placeholderTextColor='#ccc'
                style={[styles.input,{color: colors.text}]}
                placeholder={placeholder}
            />
        </View>
    </View> );
}

export default Input;