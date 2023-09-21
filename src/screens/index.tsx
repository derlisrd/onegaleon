import { useAuthProvider } from "../providers/authprovider";
import AuthScreens from "./Auth";
import GuestScreens from "./Guest";

function MainScreens() {
    const {isAuth} = useAuthProvider()
    return ( <>
    {
        isAuth ? <AuthScreens /> : <GuestScreens />
    }
    </> );
}

export default MainScreens;