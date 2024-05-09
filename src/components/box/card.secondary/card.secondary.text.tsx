import { Text } from "react-native-paper";
import { styles } from "./styles";
import { ReactNode } from "react";
import { useTheme } from '@react-navigation/native';

interface CardSecondaryTextProps{
    color?: string
    size?: number
    children?: ReactNode
}


function CardSecondaryText({color,size,children}:CardSecondaryTextProps) {
    const {colors} = useTheme()
    return <Text style={[{fontSize:size,color: colors.text},styles.bold,styles.uppercase]}>{children}</Text>
}

export default CardSecondaryText;