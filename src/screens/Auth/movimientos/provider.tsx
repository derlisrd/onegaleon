import { ReactNode, createContext,useContext,useState } from "react";





const MovimientosContext = createContext({
    movimientos: []
})


function MovimientosProvider({children}:{children : ReactNode}) {

    const [movimientos,setMovimientos] = useState([])

    const values = {movimientos}

    return ( <MovimientosContext.Provider value={values}>{children}</MovimientosContext.Provider> );
}

export const useMovimientos = ()=>{
    const {movimientos} = useContext(MovimientosContext)
    return {movimientos}
}

export default MovimientosProvider;