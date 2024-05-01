import { Input, PrimaryButton, SafeArea, Title } from "@components";
import { useThemeStore } from "store/theme.store";


function LoginScreen() {
    const {setTheme} = useThemeStore()

    const cambiar = ()=>{
        setTheme()
    }
    
    return <SafeArea>
        <Title align="center" uppercase >login</Title>
        <Input 
            placeholder="Email"
        />
        <Input 
            placeholder="Contraseña"
        />
        <PrimaryButton onPress={cambiar} center>cambiar</PrimaryButton>
    </SafeArea>
}

export default LoginScreen;