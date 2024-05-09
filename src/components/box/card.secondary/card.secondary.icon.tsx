import { colors } from "@config"
import { ElementType } from "react"
import { useTheme } from '@react-navigation/native';
interface CardSecondaryIconProps {
    icon: ElementType
    name: string
    size?:number
    color?:string
  }

  function CardSecondaryIcon ({icon : Icon, name,size,color}:CardSecondaryIconProps){
    const {colors} = useTheme()
    return <Icon name={name} size={size ? size : 24} color={colors.text} />
  }

export default CardSecondaryIcon