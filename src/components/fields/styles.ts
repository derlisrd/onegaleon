import { colors } from "config/colors";
import { fonts } from "config/fonts";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    input:{
        padding:12,
        backgroundColor: colors.gray[2],
        borderRadius:12,
        fontFamily: fonts.normal,
        fontSize:15
    },
    container:{
        padding: 12,
    }
})