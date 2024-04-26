import { colors } from "config/colors";
import { fonts } from "config/fonts";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    main:{
        padding:12,
    },
    input:{
        padding:14,
        fontFamily: fonts.normal,
        fontSize:15
    },
    icon:{
        justifyContent:'center',
        alignItems:'center',
        objectFit:'cover',
        paddingLeft:12
    },
    container:{
        backgroundColor: colors.gray[2],
        borderRadius:12,
        alignItems:'center',
        flexDirection:'row',
        paddingHorizontal:0,
        gap:4
    }
})