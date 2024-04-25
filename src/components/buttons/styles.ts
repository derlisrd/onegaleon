import { colors } from "config/colors";
import { fonts } from "config/fonts";
import { StyleSheet } from "react-native";



export const styles = StyleSheet.create({
    containerPrimaryButton:{
        backgroundColor:colors.primary,
        maxWidth:280,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:12,
        width:'100%',
        padding:15
    },
    textPrimaryButton:{
        fontFamily: fonts.normal,
        fontSize:16,
        textTransform:'uppercase',
        color: colors.white
    }
})