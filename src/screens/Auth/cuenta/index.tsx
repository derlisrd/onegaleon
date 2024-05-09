import { CardBox, CardSecondary, Input, PrimaryButton, SafeArea, Title } from "@components";
import { useAuth } from "providers/auth.provider";
import Icon from 'react-native-vector-icons/MaterialIcons'
import { useThemeStore } from "store/theme.store";

function Cuenta() {
    const {setTheme} = useThemeStore()
    const { logout} = useAuth()
    return <SafeArea>
        <Title>Cuenta</Title>
        <PrimaryButton center variant="outlined" onPress={logout}>Cerrar sesion</PrimaryButton>
        <PrimaryButton center  onPress={logout}>normal</PrimaryButton>
        <Input placeholder="hola" />
        
        <CardBox info="info" dato="dato" textAction="cambiar" onPress={setTheme} />

        <CardSecondary.Container onPress={()=>{}}>
        <CardSecondary.Icon icon={Icon} name="edit-note" />
        <CardSecondary.Text size={12}>Solicitar línea de crédito</CardSecondary.Text>
        </CardSecondary.Container>
    </SafeArea>
}

export default Cuenta;