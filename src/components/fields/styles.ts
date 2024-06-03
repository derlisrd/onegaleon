import { colors } from "config/colors";
import { fonts } from "config/fonts";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    main:{
        padding:12,
    },
    input:{
        padding:12,
        fontFamily: fonts.normal,
        fontSize:14,
        
    },
    icon:{
        justifyContent:'center',
        alignItems:'center',
        objectFit:'cover',
        paddingLeft:12
    },
    container:{
        borderRadius:8,
        alignItems:'center',
        flexDirection:'row',
        paddingHorizontal:0,
        gap:4
    }
})