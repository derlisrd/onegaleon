import { ReactNode } from 'react';
import {Pressable,View,Text,StyleSheet} from 'react-native';
import { colors } from '../../utils/colors';



function ButtonSecondary ({children, onPress}: {children: ReactNode , onPress:  () => void }) {
    return ( <Pressable onPress={onPress}>
    <View style={style.button}>
        <Text style={style.buttontext}>{children}</Text>
    </View>
</Pressable> );
}

const style = StyleSheet.create({

    button:{
        backgroundColor:colors.yellowExtraLight,
        padding:15,
        minWidth:280,
        borderRadius:8,
        marginVertical:8,
        borderColor:colors.yellowDark,
        borderWidth:1
    },
    buttontext:{
        color: colors.black72,
        fontSize:16,
        fontWeight:'bold',
        fontFamily:'Montserrat_700Bold',
        textAlign: 'center',
        textTransform: 'uppercase'
    }
})


export default ButtonSecondary;