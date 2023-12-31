
import { createContext,useContext, useEffect,useCallback,useState, ReactNode,SetStateAction } from "react";
import { Storage } from "../utils/storage";
import { movimientoStoreForm } from "../domains/types/movimientoStoreForm.type";
import { flujosType } from "../domains/types/flujos.type";
import { APICALLER } from "../services/api";
import { useAuthProvider } from "./authprovider";



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
    const {userData} = useAuthProvider()
    const [movimientosStore,setMovimientosStore] = useState <movimientoStoreForm[]>([])
    const [flujos,setFlujos] = useState({entrada:0,salida:0, balance:0})
    const [checkingMovimientos,setCheckingMovimientos] = useState(true)

    const setearMovimientosStore = async(mov : movimientoStoreForm )=>{
        let nuevo = [...movimientosStore]
        nuevo.push(mov)
        setMovimientosStore(nuevo);
        let  entrada= 0, balance:number = 0, salida : number = 0, analizarValor : number = 0;
        nuevo.forEach((el : movimientoStoreForm) => {
            analizarValor = parseFloat(el.valor) 
            if(el.modo === '0'){
                salida += analizarValor
            }else{
                entrada += analizarValor
            }
        });
        balance = entrada - salida ;
        setFlujos({salida,entrada,balance})
        await Storage.set({key:'movimientos', value: nuevo})
        
    }

    const sincronizar = async()=>{
        setCheckingMovimientos(true)
        let movi = [...movimientosStore]
        const objetosSyncFalse = movi.filter(objeto => objeto.sync === false);
        let promesas : any[] = [], data = {}
        objetosSyncFalse.forEach((elm : movimientoStoreForm)=>{
            data = {detalles: elm.detalles, category_id: elm.category_id, tipo: elm.tipo, modo: elm.modo, created_at: elm.created_at,valor: elm.valor}
            promesas.push(APICALLER.post({url:'/movimientos',data,token:userData.token}))
        })
        await Promise.all(promesas) 
        const objetosActualizados = movi.map((elm:movimientoStoreForm) =>
            elm.sync === false ? { ...elm, sync: true } : elm
        )
       console.log(objetosActualizados);
       

        setCheckingMovimientos(false)

    }

    const checkStore = useCallback(async()=>{
        setCheckingMovimientos(true)
        const store =  await Storage.get({key:'movimientos'});
        if(store){
            setMovimientosStore(store)
            let  entrada= 0, balance:number = 0, salida : number = 0, analizarValor : number = 0;
            store.forEach((el : movimientoStoreForm) => {
                analizarValor = parseFloat(el.valor) 
                if(el.modo === '0'){
                    salida += analizarValor
                }else{
                    entrada += analizarValor
                }
            });
            balance = entrada - salida ;
            setFlujos({salida,entrada,balance})
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