import { TextInput, StyleSheet } from "react-native";

function Input({placeholder}:{placeholder: string}) {
    return (<TextInput style={style.input} placeholder={placeholder} />  );
}

const style = StyleSheet.create({
    input:{
        borderWidth:1,
        borderColor:'silver',
        marginVertical: 4,
        minWidth:280,
        fontSize:12,
        padding:12,
        borderRadius:8
    },
})

export default Input;