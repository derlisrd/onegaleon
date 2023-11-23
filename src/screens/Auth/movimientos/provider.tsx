import { ReactNode, createContext,useContext,useState,useCallback } from "react";
import { APICALLER } from "../../../services/api";
import { useAuthProvider } from "../../../providers/authprovider";


type fechaForm = {
    inicio: string
    fin: string
}


type MovimentosProps = {
    movimientos: never[],
    loading: boolean,
    fecha: fechaForm,
    setFecha: React.Dispatch<React.SetStateAction<fechaForm>>
    getMovimientos:(inicio: string, fin: string)=>void
} 

const MovimientosContext = createContext<MovimentosProps>({
    movimientos: [],
    loading: false,
    fecha: {inicio:'',fin:''},
    setFecha: ()=>{},
    getMovimientos: (inicio: string, fin: string)=>{}
})


function MovimientosProvider({children}:{children : ReactNode}) {
    const {userData} = useAuthProvider()
    const [fecha,setFecha] = useState({
        inicio:'',
        fin:''
    })
    const [movimientos,setMovimientos] = useState([])
    const [loading,setLoading] = useState(false)

    const getMovimientos = useCallback(async(inicio : string,fin : string)=>{
        setLoading(true)
        const res = await APICALLER.get({url:`movimientos?fecha_inicio=00:00:00${inicio}&fecha_fin=${fin}`,token:userData.token})
        if(res.success){
            setMovimientos(res.results)
        }
        console.log(res);
        setLoading(false)
    },[fecha])

    const values = {movimientos,setFecha,fecha,loading, getMovimientos}

    return ( <MovimientosContext.Provider value={values}>{children}</MovimientosContext.Provider> );
}

export const useMovimientos = ()=>{
    const {movimientos,setFecha,fecha,loading, getMovimientos} = useContext(MovimientosContext)
    return {movimientos,setFecha,fecha,loading, getMovimientos}
}

export default MovimientosProvider;