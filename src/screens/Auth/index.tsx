import { PrimaryButton, SafeArea } from "@components";
import { useAuth } from "providers/auth.provider";

function AuthScreens() {
    const {logout} = useAuth()
    return <SafeArea>
        <PrimaryButton onPress={logout}>cerra sesion</PrimaryButton>
    </SafeArea>
}

export default AuthScreens;