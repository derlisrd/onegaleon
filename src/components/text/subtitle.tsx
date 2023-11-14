import { ReactNode } from "react";
import { Text, StyleSheet } from "react-native";
import { widthScreen } from "../../utils/dimensions";
import { colors } from "../../utils/colors";

function SubTitle({children}: {children: ReactNode}) {
    return ( <Text style={style.title}>{children}</Text> );
}

const style = StyleSheet.create({
    title:{
        fontSize:16,
        maxWidth: widthScreen*0.9,
        marginVertical:8,
        color: colors.black72,
        fontFamily:'Montserrat_400Regular'
    }
})


export default SubTitle;