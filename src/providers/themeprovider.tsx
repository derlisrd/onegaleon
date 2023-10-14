import { createContext, useState, ReactNode, useContext, useCallback, useEffect } from "react";

type ThemeContextProps = {
    mode: string,
    changeMode: ()=>void
}

const ThemeContext = createContext<ThemeContextProps>({
    mode: 'dark',
    changeMode: ()=>{}
})


interface Props{
    children: ReactNode
} 

function ThemeProvider({children}:Props) {

    const [mode,setMode] = useState('dark')

    const changeMode = useCallback(async()=>{
        
    },[])
    const verificar = useCallback(async()=>{
        setMode((prev: string)=> {
            return prev==='dark' ? 'light' : 'dark'
        })
        
    },[])

    useEffect(() => {
        const ca = new AbortController(); let isActive = true;
        if (isActive) {verificar();}
        return () => {isActive = false; ca.abort();};
      }, [verificar]);


    const values = {mode,changeMode}
    return <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
}


export function useTheme(){
    const {mode,changeMode} = useContext(ThemeContext);
    return {mode,changeMode}
}

export default ThemeProvider