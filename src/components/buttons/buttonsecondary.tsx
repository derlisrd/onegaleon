import { ReactNode } from 'react';
import {Pressable,View,Text,StyleSheet} from 'react-native';



function ButtonSecondary ({children, onPress}: {children: ReactNode , onPress:  () => void }) {
    return ( <Pressable onPress={onPress}>
    <View style={style.button}>
        <Text style={style.buttontext}>{children}</Text>
    </View>
</Pressable> );
}

const style = StyleSheet.create({

    button:{
        backgroundColor:'#fff',
        padding:18,
        minWidth:280,
        borderRadius:8,
        marginVertical:8,
        borderColor:'#ccc',
        borderWidth:1
    },
    buttontext:{
        color:'#000',
        textAlign:'center',
        textTransform:'uppercase'
    }
})


export default ButtonSecondary;