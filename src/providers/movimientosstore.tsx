
import { createContext,useContext, useEffect,useCallback,useState, ReactNode,SetStateAction } from "react";
import { Storage } from "../utils/storage";
import { movimientoStoreForm } from "../domains/types/movimientoStoreForm.type";
import { flujosType } from "../domains/types/flujos.type";



type contextProps = {
    movimientosStore : movimientoStoreForm[],
    checkingMovimientos: boolean,
    setearMovimientosStore:(mov : movimientoStoreForm)=>void,
    sincronizar : ()=>void,
    flujos: flujosType;
    setFlujos: React.Dispatch<React.SetStateAction<flujosType>>;
}


const MovimientosContext = createContext<contextProps>({
    movimientosStore: [],
    checkingMovimientos: true,
    setearMovimientosStore:()=>{},
    sincronizar: ()=>{},
    flujos: {salida:0,entrada:0, balance:0},
    setFlujos: () => ({ salida: 0, entrada: 0, balance:0 }),
})


interface Props {
    children: ReactNode
}

function MovimientosStore({children}:Props) {
    const [movimientosStore,setMovimientosStore] = useState <movimientoStoreForm[]>([])
    const [flujos,setFlujos] = useState({entrada:0,salida:0, balance:0})
    const [checkingMovimientos,setCheckingMovimientos] = useState(true)

    const setearMovimientosStore = async(mov : movimientoStoreForm )=>{
        let nuevo = [...movimientosStore]
        nuevo.push(mov)
        setMovimientosStore(nuevo);
        await Storage.set({key:'movimientos', value: nuevo})
        
    }

    const sincronizar = async()=>{
        
        const objetosSyncFalse = movimientosStore.filter(objeto => objeto.sync === false);
        console.log(objetosSyncFalse);

    }

    const checkStore = useCallback(async()=>{
        setCheckingMovimientos(true)
        const store =  await Storage.get({key:'movimientos'});
        if(store){
            setMovimientosStore(store)
            let  entra : number, balan:number, sali : number = 0 
            store.array.forEach((el : movimientoStoreForm) => {
                let analizarValor = parseFloat(el.valor) 
                if(el.modo === '0'){
                    entra += analizarValor
                }
            });
        }
        setCheckingMovimientos(false)
    },[Storage])

    useEffect(() => {
        const ca = new AbortController(); let isActive = true;
        if (isActive) {checkStore();}
        return () => {isActive = false; ca.abort();};
      }, [checkStore]);

    const values = {movimientosStore,checkingMovimientos,setearMovimientosStore, sincronizar,flujos,setFlujos}
    return <MovimientosContext.Provider value={values}>{children}</MovimientosContext.Provider>

}

export const useMovimientoStore = ()=>{
    const {movimientosStore,checkingMovimientos,setearMovimientosStore, sincronizar,flujos,setFlujos} = useContext(MovimientosContext)
    return {movimientosStore,checkingMovimientos,setearMovimientosStore, sincronizar,flujos,setFlujos} 
}

export default MovimientosStore;