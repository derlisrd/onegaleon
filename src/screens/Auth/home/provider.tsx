import { ReactNode, createContext, useCallback, useContext, useEffect, useState } from "react";
import { APICALLER } from "../../../services/api";
import { useAuthProvider } from "../../../providers/authprovider";

interface HomeContextProps {
    movimientos: any[]
    loading: boolean
}


const HomeContext = createContext<HomeContextProps>({
    movimientos: [],
    loading: true
})

interface Props {
    children: ReactNode
}


function HomeProvider({children}: Props) {
    const {userData} = useAuthProvider()
    const [movimientos,setMovimientos] = useState([])
    const [loading,setLoading] = useState(true)
         //verificar sesion activa
    const getMovimientos = useCallback(async()=>{
        const res = await APICALLER.get({url:'/movimientos',token:userData.token})
        console.log(res);
        
        setMovimientos([])

        setLoading(false)
    },[userData])

    useEffect(() => {
        const ca = new AbortController(); let isActive = true;
        if (isActive) {getMovimientos();}
        return () => {isActive = false; ca.abort();};
      }, [getMovimientos]);


    const values = {movimientos,loading}
    return <HomeContext.Provider value={values}>{children}</HomeContext.Provider>
}
export function useHome (){
    const {movimientos, loading} = useContext(HomeContext)
    return {movimientos, loading}
}
export default HomeProvider;