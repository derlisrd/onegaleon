import { TextInput, StyleSheet, InputModeOptions,View,Text } from "react-native";


type Props = {
    placeholder?: string
    onChangeText?: ((text: string) => void) | undefined;
    inputMode?: InputModeOptions,
    secureTextEntry?: boolean,
    label?: string
    error?: boolean | false
    errorMessage?: string,
    value?: string
}

function Input({placeholder,onChangeText,inputMode,secureTextEntry,label, error, errorMessage,value}: Props) {
    return (
        <View style={style.container}>
            <View>
                <Text style={[style.font,style.label]}>{label}</Text>
            </View>
            <View>
            <TextInput style={[style.font, style.input, error ? style.novalid : style.normal]} placeholder={placeholder} 
        onChangeText={onChangeText}
        value={value}
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
        borderColor:'#EC0C74',
    },
    normal:{
        borderColor:'#868688',
    },
    input:{
        borderWidth:1,
        minWidth:280,
        backgroundColor:'#FFF',
        fontSize:12,
        padding:12,
        borderRadius:8,
    },
    font:{
        fontFamily:'Montserrat_400Regular',
    },
    label:{
        marginBottom:2,
        color:'gray'
    },
    error:{
        color:'#EC0C74',
        fontSize:12
    }
})

export default Input;