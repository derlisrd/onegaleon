import { Input, PrimaryButton, SafeArea, Title } from "@components";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

import { useTheme } from '@react-navigation/native';

function LoginScreen() {
    const {colors} = useTheme()
    
    return <SafeArea>
        <Title align="center" uppercase >login</Title>
        <Input 
            placeholder="hola..."
        />
        <PrimaryButton center>cambiar</PrimaryButton>
    </SafeArea>
}

export default LoginScreen;