import { ReactNode } from "react";
import { Text, StyleSheet } from "react-native";

function Title({children}: {children: ReactNode}) {
    return ( <Text style={style.title}>{children}</Text> );
}

const style = StyleSheet.create({
    title:{
        fontSize:48,
        color: '#000',
        fontFamily:'Montserrat_700Bold'
    }
})


export default Title;