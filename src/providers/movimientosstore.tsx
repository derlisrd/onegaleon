
import { createContext,useContext, useEffect,useCallback,useState, ReactNode } from "react";
import { Storage } from "../utils/storage";
import { movimientoStoreForm } from "../domains/types/movimientoStoreForm.type";


type contextProps = {
    movimientosStore : movimientoStoreForm[],
    checkingMovimientos: boolean,
    setearMovimientosStore:(mov : movimientoStoreForm)=>void
}


const MovimientosContext = createContext<contextProps>({
    movimientosStore: [],
    checkingMovimientos: true,
    setearMovimientosStore:()=>{}
})


interface Props {
    children: ReactNode
}

function MovimientosStore({children}:Props) {
    const [movimientosStore,setMovimientosStore] = useState <movimientoStoreForm[]>([])
    const [checkingMovimientos,setCheckingMovimientos] = useState(true)

    const setearMovimientosStore = async(mov : movimientoStoreForm )=>{
        let nuevo = [...movimientosStore]
        nuevo.push(mov)
        setMovimientosStore(nuevo);
        await Storage.set({key:'movimientos', value: nuevo})
    }

    const checkStore = useCallback(async()=>{
        setCheckingMovimientos(true)
        const store =  await Storage.get({key:'movimientos'});
        if(store){
            setMovimientosStore(store)
        }
        setCheckingMovimientos(false)
    },[Storage])

    useEffect(() => {
        const ca = new AbortController(); let isActive = true;
        if (isActive) {checkStore();}
        return () => {isActive = false; ca.abort();};
      }, [checkStore]);

    const values = {movimientosStore,checkingMovimientos,setearMovimientosStore}
    return <MovimientosContext.Provider value={values}>{children}</MovimientosContext.Provider>

}

export const useMovimientoStore = ()=>{
    const {movimientosStore,checkingMovimientos,setearMovimientosStore} = useContext(MovimientosContext)
    return {movimientosStore,checkingMovimientos,setearMovimientosStore} 
}

export default MovimientosStore;