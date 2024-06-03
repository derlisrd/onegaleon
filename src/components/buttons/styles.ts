import { colors } from "config/colors";
import { fonts } from "config/fonts";
import { StyleSheet } from "react-native";



export const styles = StyleSheet.create({
    center:{
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    button:{
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        gap:12,
        borderColor:colors.primary,
        maxWidth:320,
        width:'100%',
        borderRadius:8,
        padding:12,
        borderWidth:1
    },
    containerPrimaryButtonContained:{
        backgroundColor:colors.primary,
    },
    containerPrimaryButtonOutlined:{
        backgroundColor:colors.white,
    },
    containerButton:{
        
    },
    font:{
        fontFamily: fonts.semibold,
        fontSize:14,
    },
    disabledButton:{
        backgroundColor: `${colors.gray[3]} !important`,
        borderColor: `${colors.gray[3]} !important`,
    },
    disabledText:{
        color: `${colors.gray[3]} !important`,
    },
})