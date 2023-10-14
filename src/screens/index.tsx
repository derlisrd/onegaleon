import { Fragment } from "react";
import { useAuthProvider } from "../providers/authprovider";
import AuthScreens from "./Auth";
import GuestScreens from "./Guest";
import SplashScreen from "./Splash";
import { StatusBar } from "expo-status-bar";

function MainScreens() {
    const {isAuth,checkingAuthLoading} = useAuthProvider()

    if(checkingAuthLoading){
        return <SplashScreen />
    }


    return ( <Fragment>
    {
        isAuth ? <AuthScreens /> : <GuestScreens />
    }
    <StatusBar backgroundColor={'#fff'} style='dark'  />
    </Fragment> );
}

export default MainScreens;