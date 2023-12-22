import { ReactNode, createContext,useContext,useState,useCallback } from "react";
import { APICALLER } from "../../../services/api";
import { useAuthProvider } from "../../../providers/authprovider";
import { getMovimientos, movimientosResponse } from "../../../models/get";


type fechaForm = {
    inicio: string
    fin: string
}


type MovimentosProps = {
    movimientos: getMovimientos,
    loading: boolean,
    isActive:boolean,
    fecha: fechaForm,
    setFecha: React.Dispatch<React.SetStateAction<fechaForm>>
    getMovimientos:(inicio: string, fin: string)=>void,
    balance:number,
    datos:{
        egresos:number,
        ingresos:number
    }
} 

const MovimientosContext = createContext<MovimentosProps>({
    movimientos: [],
    loading: false,
    isActive:false,
    fecha: {inicio:'',fin:''},
    setFecha: ()=>{},
    getMovimientos: (inicio: string, fin: string)=>{},
    balance:0,
    datos:{
        egresos:0,
        ingresos:0
    }
})


function MovimientosProvider({children}:{children : ReactNode}) {
    const {userData} = useAuthProvider()
    const [fecha,setFecha] = useState({
        inicio:'',
        fin:''
    })
    const [isActive,setIsActive] = useState(false)
    const [balance,setBalance] = useState<number>(0)
    const [datos,setDatos] = useState({
        ingresos:0,
        egresos:0
    })
    const [movimientos,setMovimientos] = useState<getMovimientos>([])
    const [loading,setLoading] = useState(false)

    const getMovimientos = useCallback(async(inicio : string,fin : string)=>{
        setLoading(true)
        const res : movimientosResponse = await APICALLER.get({url:`movimientos?fecha_inicio=00:00:00${inicio}&fecha_fin=${fin}`,token:userData.token})
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
            setDatos({egresos:egre, ingresos:ingre})
            setBalance(balanceLocal)
            setMovimientos(res.results)
            setIsActive(true)
        }
        setLoading(false)
    },[fecha])

    const values = {movimientos,setFecha,fecha,loading, getMovimientos,datos,balance,isActive}

    return ( <MovimientosContext.Provider value={values}>{children}</MovimientosContext.Provider> );
}

export const useMovimientos = ()=>{
    const {movimientos,setFecha,fecha,loading, getMovimientos,datos,balance,isActive} = useContext(MovimientosContext)
    return {movimientos,setFecha,fecha,loading, getMovimientos,datos,balance,isActive}
}

export default MovimientosProvider;