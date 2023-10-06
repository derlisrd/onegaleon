import { ReactNode } from "react";
import { Text, StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

function Title2({children}: {children: ReactNode}) {
    return ( <Text style={style.title}>{children}</Text> );
}

const style = StyleSheet.create({
    title:{
        fontSize:24,
        marginVertical:12,
        textAlign:'center',
        color: colors.primary,
        fontFamily:'Montserrat_700Bold'
    }
})


export default Title2;