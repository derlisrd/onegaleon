import Octicons from 'react-native-vector-icons/Octicons'
import { FlexStyle, Pressable, View } from "react-native";
import { styles } from "./styles";
import { colors } from '@config';
import { ReactNode } from 'react';
import { useTheme } from '@react-navigation/native';

interface Props{
    onPress?: ()=>void;
    display?: FlexStyle['display'];
    isInvalid?: boolean;
    children?: ReactNode
    showNextButton?: boolean
}

export default function CardSecondaryContainer({onPress,display,isInvalid,children, showNextButton = false}:Props) {
  const {colors} = useTheme()
    return (
    <Pressable onPress={onPress} style={{display:display}}>
      <View  style={[styles.mainCardSecondary, {borderColor: colors.text} ]}>
        <View style={styles.containerCardSecondary} >
            <View style={{ flexDirection:'row',alignItems:'center',gap:6 }}>
              {children}
            </View>
          <Octicons color={colors.text} size={28} name='chevron-right' />
        </View>
      </View>
    </Pressable>
    );
  }