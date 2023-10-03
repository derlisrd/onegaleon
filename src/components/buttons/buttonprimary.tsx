import { ReactNode } from 'react';
import { Pressable, View, Text, StyleSheet } from 'react-native';
import { colors } from '../../utils/colors';



function ButtonPrimary({ children, onPress }: { children: ReactNode, onPress: () => void }) {
    return (<Pressable onPress={onPress}>
        <View style={style.button}>
            <Text style={style.buttontext}>{children}</Text>
        </View>
    </Pressable>);
}

const style = StyleSheet.create({

    button: {
        backgroundColor: colors.primary,
        padding: 14,
        minWidth: 280,
        borderRadius: 8,
        marginVertical: 8,
    },
    buttontext: {
        color: '#fff',
        textAlign: 'center',
        textTransform: 'uppercase'
    },

})


export default ButtonPrimary;