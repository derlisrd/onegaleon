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
        gap:12
    },
    containerPrimaryButtonContained:{
        backgroundColor:colors.primary,
        maxWidth:280,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:12,
        width:'100%',
        padding:15
    },
    containerPrimaryButtonOutlined:{
        backgroundColor:colors.white,
        borderColor:colors.primary,
        borderWidth:1,
        maxWidth:280,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:12,
        width:'100%',
        padding:15
    },
    font:{
        fontFamily: fonts.normal,
        fontSize:16,
        textTransform:'uppercase'
    },
    disabledButton:{
        backgroundColor: `${colors.gray[3]} !important`,
        borderColor: `${colors.gray[3]} !important`,
    },
    disabledText:{
        color: `${colors.gray[3]} !important`,
    },
})