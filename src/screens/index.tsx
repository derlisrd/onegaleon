import { useAuthProvider } from "../providers/authprovider";
import AuthScreens from "./Auth";
import GuestScreens from "./Guest";
import SplashScreen from "./Splash";

function MainScreens() {
    const {isAuth,checkingAuthLoading} = useAuthProvider()

    if(checkingAuthLoading){
        return <SplashScreen />
    }


    return ( <>
    {
        isAuth ? <AuthScreens /> : <GuestScreens />
    }
    </> );
}

export default MainScreens;