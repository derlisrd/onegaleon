import { espaciado } from "@types"
import { fonts } from "config/fonts"
import { ReactNode } from "react"
import { StyleSheet, TextStyle,Text } from "react-native"
import { useTheme } from '@react-navigation/native';

interface Props extends espaciado{
    children: ReactNode
    color? : string 
    size? : number
    align? : TextStyle['textAlign']
    bold? : boolean,
    uppercase?: boolean
}

export default function Title({children,color,size,align,p,my,mt,mx,bold,py,px,mb,ml,uppercase}:Props) {
  const { colors } = useTheme();  
  
  return <Text
    style={[
      bold ? styles.bold : styles.normal,
      {
        marginTop: mt,
        marginLeft:ml,
        textTransform: uppercase ? "uppercase" : "none",
        marginBottom: mb,
        color: colors.text,
        fontSize: size ?? 24,
        textAlign: align,
        padding: p,
        marginVertical: my,
        marginHorizontal: mx,
        paddingVertical: py,
        paddingHorizontal: px,
      },
    ]}
  >
    {children}
  </Text>;
  
}
const styles = StyleSheet.create({
    bold:{
        fontFamily:fonts.bold
    },
    normal:{
        fontFamily: fonts.normal
    }
})