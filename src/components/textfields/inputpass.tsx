import { TextInput, StyleSheet, InputModeOptions,View,Text, TextInputProps, Pressable } from "react-native";
import { colors } from "../../utils/colors";
import Ionicons from 'react-native-vector-icons/Ionicons'

interface Props extends TextInputProps  {
    placeholder?: string
    onChangeText?: ((text: string) => void) | undefined;
    inputMode?: InputModeOptions,
    secureTextEntry?: boolean,
    label?: string
    error?: boolean | false
    errorMessage?: string,
    value?: string,
    onPress:()=>void
}

function InputPass({placeholder,onChangeText,onPress,inputMode,secureTextEntry,label, error, errorMessage,value, autoCapitalize}: Props) {
    return (
        <View style={style.container}>
            <View>
                <Text style={[style.font,style.label]}>{label}</Text>
            </View>
            <View style={style.box}>
            <TextInput style={[style.font, style.input, error ? style.novalid : style.normal]} placeholder={placeholder} 
                onChangeText={onChangeText}
                value={value} autoCapitalize={autoCapitalize}
                inputMode={inputMode}
                secureTextEntry={secureTextEntry}
            />  
            <Pressable onPress={onPress} style={style.iconButton}>
             <Ionicons name={secureTextEntry ? 'eye-off' : 'eye' } color={colors.black72} size={24} />
            </Pressable>
            </View>
            <View>
                <Text style={[style.font,style.error]}>{errorMessage}</Text>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    box:{
        width:'100%',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    iconButton:{
        position:'absolute',
        right:24,
        height:24
    },
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
        width:'100%',
        backgroundColor:colors.white,
        fontSize:14,
        padding:16,
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

export default InputPass;