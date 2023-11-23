import { ReactNode, createContext,useContext,useState } from "react";
import { APICALLER } from "../../../services/api";
import { useAuthProvider } from "../../../providers/authprovider";


type fechaForm = {
    inicio: string
    fin: string
}


type MovimentosProps = {
    movimientos: never[],
    loading: boolean,
    setFecha: React.Dispatch<React.SetStateAction<fechaForm>>
    getMovimientos:()=>void
} 

const MovimientosContext = createContext<MovimentosProps>({
    movimientos: [],
    loading: false,
    setFecha: ()=>{},
    getMovimientos: ()=>{}
})


function MovimientosProvider({children}:{children : ReactNode}) {
    const {userData} = useAuthProvider()
    const [fecha,setFecha] = useState({
        inicio:'',
        fin:''
    })
    const [movimientos,setMovimientos] = useState([])
    const [loading,setLoading] = useState(false)

    const getMovimientos = async()=>{
        setLoading(true)
        const res = await APICALLER.get({url:`movimientos?fecha_inicio=${fecha.inicio}&fecha_fin=${fecha.fin}`,token:userData.token})
        console.log(res);
        if(res.success){
            setMovimientos(res.results)
        }
        setLoading(false)
    }

    const values = {movimientos,setFecha,loading, getMovimientos}

    return ( <MovimientosContext.Provider value={values}>{children}</MovimientosContext.Provider> );
}

export const useMovimientos = ()=>{
    const {movimientos,setFecha,loading, getMovimientos} = useContext(MovimientosContext)
    return {movimientos,setFecha,loading, getMovimientos}
}

export default MovimientosProvider;