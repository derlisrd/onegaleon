import { createContext,useContext, useEffect,useCallback,useState, ReactNode } from "react";


interface MyContextProps {
    isAuth: boolean
  }
  


const AuthContext = createContext<MyContextProps>({
    isAuth: true
})




function AuthProvider({children}:{children: ReactNode})  {

    const [isAuth,setIsAuth] = useState<boolean>(true);

    const values = {isAuth}
    return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}


export function useAuthProvider(){
    const {isAuth} = useContext(AuthContext);
    return {isAuth}
}

export default AuthProvider;