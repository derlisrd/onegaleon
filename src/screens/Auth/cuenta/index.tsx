import { PrimaryButton, SafeArea, Title } from "@components";
import { useAuth } from "providers/auth.provider";

function Cuenta() {
    const { logout} = useAuth()
    return <SafeArea>
        <Title>Cuenta</Title>
        <PrimaryButton center variant="outlined" onPress={logout}>Cerrar sesion</PrimaryButton>
    </SafeArea>
}

export default Cuenta;