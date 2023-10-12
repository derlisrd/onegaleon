import { ReactNode, createContext, useCallback, useContext, useEffect, useState } from "react";
import { APICALLER } from "../../../services/api";
import { useAuthProvider } from "../../../providers/authprovider";

import { getMovimientos, movimientosResponse, objetosMovimientos } from "../../../models/get";


interface HomeContextProps {
    movimientos: getMovimientos
    loading: boolean,
    getMovimientos:()=>void
    pushMovimiento: (newmovimiento: objetosMovimientos)=>void
}



const HomeContext = createContext<HomeContextProps>({
    movimientos: [],
    loading: true,
    getMovimientos: async()=>{},
    pushMovimiento: ()=>{}
}
)

interface Props {
    children: ReactNode
}


function HomeProvider({children}: Props) {
    const {userData} = useAuthProvider()
    const [movimientos,setMovimientos] = useState<getMovimientos>([])
    const [loading,setLoading] = useState(true)
         //verificar sesion activa
    const getMovimientos = useCallback(async()=>{
        const res : movimientosResponse = await APICALLER.get({url:'/movimientos',token:userData.token})
        if(res.success){
            setMovimientos(res.results)
        }
        setLoading(false)
    },[userData])

    const pushMovimiento = (newmovimiento : objetosMovimientos)=>{
        setLoading(true)
        const movimientosantiguos : getMovimientos  = [...movimientos]    
        movimientosantiguos.push(newmovimiento)
        setMovimientos(movimientosantiguos)
        setLoading(false)
    }
    
    useEffect(() => {
        const ca = new AbortController(); let isActive = true;
        if (isActive) {getMovimientos();}
        return () => {isActive = false; ca.abort();};
      }, [getMovimientos]);


    const values = {movimientos,loading,getMovimientos,pushMovimiento}
    return <HomeContext.Provider value={values}>{children}</HomeContext.Provider>
}
export function useHome (){
    const {movimientos, loading,getMovimientos,pushMovimiento} = useContext(HomeContext)
    return {movimientos, loading,getMovimientos,pushMovimiento}
}
export default HomeProvider;