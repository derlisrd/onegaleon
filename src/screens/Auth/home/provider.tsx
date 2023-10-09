import { ReactNode, createContext, useCallback, useContext, useEffect, useState } from "react";
import { APICALLER } from "../../../services/api";
import { useAuthProvider } from "../../../providers/authprovider";
import { movimientoType } from "../../../models/post";

type movimientosType = Array<movimientoType>

interface HomeContextProps {
    movimientos: movimientosType
    loading: boolean,
    getMovimientos:()=>void
    pushMovimiento: (newmovimiento: movimientoType)=>void
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
    const [movimientos,setMovimientos] = useState<movimientosType>([])
    const [loading,setLoading] = useState(true)
         //verificar sesion activa
    const getMovimientos = useCallback(async()=>{
        const res = await APICALLER.get({url:'/movimientos',token:userData.token})
        //console.log(res);
        setMovimientos([])
        setLoading(false)
    },[userData])
    const pushMovimiento = (newmovimiento : movimientoType)=>{
        setLoading(true)
        const movimientosantiguos  = [...movimientos]
        movimientosantiguos.push(newmovimiento)
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