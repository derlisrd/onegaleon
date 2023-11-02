import { ReactNode } from "react";
import { Text, StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

function Title({children}: {children: ReactNode}) {
    return ( <Text style={style.title}>{children}</Text> );
}

const style = StyleSheet.create({
    title:{
        fontSize:32,
        marginVertical:8,
        color: colors.primary,
        marginHorizontal:8,
        fontFamily:'Montserrat_700Bold'
    }
})


export default Title;