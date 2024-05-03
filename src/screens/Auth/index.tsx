import { PrimaryButton, SafeArea } from "@components";
import { useAuth } from "providers/auth.provider";
import HomeBottomTab from "./home.bottom.tab";

function AuthScreens() {
    const {logout} = useAuth()
    return <HomeBottomTab />
}

export default AuthScreens;