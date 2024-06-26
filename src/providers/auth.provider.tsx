import { userDataTypes } from "@types";
import { createContext, Dispatch, ReactNode, SetStateAction, useCallback, useContext, useState } from "react";

type AuthContextTypes = {
    userData? : userDataTypes
    setUserData?: Dispatch<SetStateAction<userDataTypes | undefined>>
    isAuth?: boolean
    isLoading: boolean
    tryLogin : ()=> Promise<void>
    logout : ()=> Promise<void>
}

export const AuthContext = createContext<AuthContextTypes>({
    userData: {},
    setUserData:()=>{},
    isAuth:false,
    isLoading: true,
    tryLogin: async()=>{},
    logout: async()=>{}
})

interface AuthProviderProps {
    children: ReactNode
}

export default function AuthProvider({children}:AuthProviderProps){
    const [userData,setUserData] = useState<userDataTypes>()
    const [isAuth,setIsAuth] = useState(false)
    const [isLoading,setIsLoading] = useState(true) 

    const tryLogin = async() : Promise<void>=>{
        setIsAuth(true)
    }
    const logout = async() : Promise<void>=>{
        setIsAuth(false)
    }

    const checkAuth = useCallback( async() : Promise<void>=>{
        setIsLoading(false)
    },[])


    const values = {userData,setUserData,isAuth,isLoading,tryLogin,logout}
    return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}


export const useAuth = ()=>{
    const {userData,setUserData,isAuth,isLoading,tryLogin,logout} = useContext(AuthContext)
    return {userData,setUserData,isAuth,isLoading,tryLogin,logout}
}