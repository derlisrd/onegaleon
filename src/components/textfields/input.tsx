import { TextInput, StyleSheet, InputModeOptions,View,Text, TextInputProps } from "react-native";
import { colors } from "../../utils/colors";


interface Props extends TextInputProps  {
    placeholder?: string
    onChangeText?: ((text: string) => void) | undefined;
    inputMode?: InputModeOptions,
    secureTextEntry?: boolean,
    label?: string
    error?: boolean | false
    errorMessage?: string,
    value?: string,
}

function Input({placeholder,onChangeText,inputMode,secureTextEntry,label, error, errorMessage,value, autoCapitalize}: Props) {
    return (
        <View style={style.container}>
            <View>
                <Text style={[style.font,style.label]}>{label}</Text>
            </View>
            <View>
            <TextInput style={[style.font, style.input, error ? style.novalid : style.normal]} placeholder={placeholder} 
        onChangeText={onChangeText}
        value={value} autoCapitalize={autoCapitalize}
        inputMode={inputMode}
        secureTextEntry={secureTextEntry}
    />  
            </View>
            <View>
                <Text style={[style.font,style.error]}>{errorMessage}</Text>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        marginVertical:2,
    },
    novalid:{
        borderColor:colors.redPastel,
    },
    normal:{
        borderColor: colors.primary,
    },
    input:{
        borderWidth:1,
        minWidth:280,
        backgroundColor:colors.white,
        fontSize:14,
        padding:12,
        borderRadius:8,
    },
    font:{
        fontFamily:'Montserrat_400Regular',
    },
    label:{
        marginBottom:2,
        color: colors.primary
    },
    error:{
        color:colors.redPastel,
        fontSize:12
    }
})

export default Input;