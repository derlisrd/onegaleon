import { ReactNode, createContext, useCallback, useContext, useEffect, useState } from "react";
import { APICALLER } from "../../../services/api";
import { useAuthProvider } from "../../../providers/authprovider";

import { getMovimientos, movimientosResponse, objetosMovimientos } from "../../../models/get";
import moment from "moment";


interface HomeContextProps {
    movimientos: getMovimientos
    loading: boolean,
    balance:number,
    getMovimientos:()=>void
    pushMovimiento: (newmovimiento: objetosMovimientos)=>void
    datos:{
        egresos:number,
        ingresos:number
    }
}



const HomeContext = createContext<HomeContextProps>({
    movimientos: [],
    balance:0,
    loading: true,
    getMovimientos: async()=>{},
    pushMovimiento: ()=>{},
    datos:{
        egresos:0,
        ingresos:0
    }
}
)

interface Props {
    children: ReactNode
}


function HomeProvider({children}: Props) {
    const {userData} = useAuthProvider()
    const [movimientos,setMovimientos] = useState<getMovimientos>([])
    const [balance,setBalance] = useState<number>(0)
    const [datos,setDatos] = useState({
        ingresos:0,
        egresos:0
    })
    const [loading,setLoading] = useState(true)
         //verificar sesion activa
    const getMovimientos = useCallback(async()=>{
        const primerDiaMes = moment().startOf('month').format('YYYY-MM-DD');
        const ultimoDiaMes = moment().endOf('month').format('YYYY-MM-DD');
        
        setLoading(true)
        const res : movimientosResponse = await APICALLER.get({url:`/movimientos?fecha_inicio=${primerDiaMes}&fecha_fin=${ultimoDiaMes}`,token:userData.token})
        if(res.success){
            let balanceLocal = 0
            let ingre= 0
            let egre = 0
            res.results.forEach(el=>{
                if(el.modo===1){
                    ingre += el.valor
                    balanceLocal += el.valor
                }else{
                    egre += el.valor
                    balanceLocal -= el.valor
                }
            })
            //console.log(balanceLocal);
            setDatos({egresos:egre, ingresos:ingre})
            setBalance(balanceLocal)
            setMovimientos(res.results)
        }
        setLoading(false)
    },[userData])

    const pushMovimiento = (newmovimiento : objetosMovimientos)=>{
        setLoading(true)
        const movimientosantiguos : getMovimientos  = [...movimientos]
        setBalance( newmovimiento.modo>0 ? (balance + newmovimiento.valor) : (balance - newmovimiento.valor) )
        let antiguosDatos = {...datos}
        let egresoAntiguo = antiguosDatos.egresos;
        let ingresoAntiguo = antiguosDatos.ingresos;
        
        if(newmovimiento.modo>0){
            ingresoAntiguo += newmovimiento.valor;
        }else{
            egresoAntiguo += newmovimiento.valor;
        }
        setDatos({egresos: egresoAntiguo, ingresos:ingresoAntiguo})
        
        movimientosantiguos.push(newmovimiento)
        setMovimientos(movimientosantiguos)
        setLoading(false) 
    }

    

    const getLocalMovimientos = useCallback(()=>{
        setLoading(true)
        
        setLoading(false)
    },[])
    
    useEffect(() => {
        const ca = new AbortController(); let isActive = true;
        if (isActive) {getLocalMovimientos();}
        return () => {isActive = false; ca.abort();};
      }, [getLocalMovimientos]);


    const values = {movimientos,loading,getMovimientos,pushMovimiento,balance,datos,setDatos}
    return <HomeContext.Provider value={values}>{children}</HomeContext.Provider>
}
export function useHome (){
    const {movimientos, loading,getMovimientos,pushMovimiento,balance,datos} = useContext(HomeContext)
    return {movimientos, loading,getMovimientos,pushMovimiento,balance,datos}
}
export default HomeProvider;