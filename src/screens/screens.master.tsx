import { useAuth } from "providers/auth.provider";
import PublicScreens from "./public";

function ScreensMaster() {

    const { isAuth}  =  useAuth()
    return isAuth ? <></> : <PublicScreens />
}

export default ScreensMaster;