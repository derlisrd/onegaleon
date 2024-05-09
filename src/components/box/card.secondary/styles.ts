import { colors, fonts } from "@config";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    colorSecondary:{
        color: colors.secondary,
    },
    mainCardSecondary:{
        flexDirection:'column',
        justifyContent:'center',
        borderStyle:'dashed',
        borderRadius:12,
        borderWidth:0,
        marginHorizontal:8,
        marginVertical:8
    },
    containerCardSecondary:{
        flexDirection:'row',
        borderBottomColor:colors.gray[4],
        borderBottomWidth:1,
        borderRadius:12,
        padding:12,
        alignItems:'center',
        justifyContent:'space-between',
    },
    bold:{
        fontFamily: fonts.bold
    },
    uppercase:{
        
    }
})