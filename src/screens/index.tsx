import { Fragment } from "react";
import { useAuthProvider } from "../providers/authprovider";
import AuthScreens from "./Auth";
import GuestScreens from "./Guest";
import SplashScreen from "./Splash";
import { StatusBar } from "expo-status-bar";
import MovimientosStore from "../providers/movimientosstore";

function MainScreens() {
    const {isAuth,checkingAuthLoading} = useAuthProvider()

    if(checkingAuthLoading){
        return <SplashScreen />
    }


    return ( <Fragment>
    {
        isAuth ? <MovimientosStore><AuthScreens /></MovimientosStore> : <GuestScreens />
    }
    <StatusBar style='dark'  />
    </Fragment> );
}

export default MainScreens;