import { ReactNode } from "react";
import { Text, StyleSheet } from "react-native";

function SubTitle({children}: {children: ReactNode}) {
    return ( <Text style={style.title}>{children}</Text> );
}

const style = StyleSheet.create({
    title:{
        fontSize:16,
        marginHorizontal:4,
        marginVertical:8,
        color: '#000',
        fontFamily:'Montserrat_400Regular'
    }
})


export default SubTitle;