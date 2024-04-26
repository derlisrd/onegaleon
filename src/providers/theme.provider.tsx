
import { createContext, Dispatch, ReactNode, SetStateAction, useCallback, useContext, useState } from "react";

type modeType = 'dark' | 'light'

type ThemeContextTypes = {
    mode? : modeType
    setMode?: Dispatch<SetStateAction<modeType>>
}

export const ThemeContext = createContext<ThemeContextTypes>({
    mode: 'dark',
    setMode: ()=>{}
})

interface ThemeProviderProps {
    children: ReactNode
}

export default function ThemeProvider({children}:ThemeProviderProps){

    const [mode,setMode] = useState<modeType>('dark')

    

    const values = {mode}
    return <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
}


export const useTheme = ()=>{
    const {} = useContext(ThemeContext)
    return {}
}