import { ReactNode } from 'react';
import { Pressable, View, Text, StyleSheet } from 'react-native';
import { colors } from '../../utils/colors';



function ButtonSm({ children, onPress }: { children: ReactNode, onPress: () => void }) {
    return (<Pressable onPress={onPress}>
        <View style={style.button}>
            <Text style={style.buttontext}>{children}</Text>
        </View>
    </Pressable>);
}

const style = StyleSheet.create({

    button: {
        backgroundColor: colors.yellow,
        padding: 8,
        borderRadius: 8,
        marginVertical: 8,
        shadowColor: colors.yellowExtraLight,
        elevation: 5,
        shadowOffset: {
        width: 5,
        height: 4,
      },
      shadowOpacity: 1
    },
    buttontext: {
        color: colors.black72,
        fontSize:16,
        fontWeight:'bold',
        fontFamily:'Montserrat_700Bold',
        textAlign: 'center',
        textTransform: 'uppercase'
    },

})


export default ButtonSm;