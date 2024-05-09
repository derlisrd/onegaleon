import { useTheme } from '@react-navigation/native';
import { colors, fonts } from "@config";
import { Pressable, StyleSheet, Text, View } from "react-native";

interface CardBoxProps {
    info?: string
    infoSize?: number
    dato?: string
    onPress?: ()=>void
    textAction?: string
}

function CardBox({info,dato,onPress,textAction,infoSize}:CardBoxProps) {
    const { colors } = useTheme();  
    return <View style={{ marginHorizontal:12 }}>
        <View style={styles.container}>
        <View style={styles.details}>
            <Text style={[styles.font,{fontSize:infoSize ?? 14, color: colors.text}]} >{info}</Text>
            <Text style={[styles.font,{fontSize:12,color: colors.text}]} >{dato}</Text>
        </View>
        <View>
            <Pressable onPress={onPress}>
                <Text style={[styles.font,styles.underlined,{fontSize:14,color: colors.text}]}>{textAction}</Text>
            </Pressable>
        </View>
    </View>
    </View>
}

const styles = StyleSheet.create({
    container:{
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-between',
        padding:12,
        borderBottomWidth:1,
        borderColor: colors.gray[4],
        shadowRadius: 2
    },
    font:{
        fontFamily:fonts.normal
    },
    details:{
        gap:8
    },
    underlined:{
        textDecorationLine:'underline'
    }
})

export default CardBox;