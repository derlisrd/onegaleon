import { createContext,useContext, useEffect,useCallback,useState, ReactNode, SetStateAction } from "react";
import { loginDataResponse } from "../models/login";
import { Storage } from "../utils/storage";


interface MyContextProps {
    isAuth: boolean,
    userData:loginDataResponse,
    setUserData:SetStateAction<{}>,
    setLogin:(data: loginDataResponse)=>void
    setLogout:()=>void
    checkingAuthLoading: boolean
  }
  


const AuthContext = createContext<MyContextProps>({
    isAuth: false,
    userData:{email:'',token:'',id:'',username:'',name:''},
    setUserData:()=>{},
    setLogin:()=>{},
    setLogout:()=>{},
    checkingAuthLoading:true
})




function AuthProvider({children}:{children: ReactNode})  {

    const [isAuth,setIsAuth] = useState<boolean>(false);
    const [checkingAuthLoading,setCheckingAuthLoading] = useState(true)
    const [userData,setUserData] = useState<loginDataResponse>({email:'',token:'',id:'',username:'',name:''})

    const setLogin = async(data: loginDataResponse)=>{
       setUserData(data)
       await Storage.set({key:'userData',value:data})
       setIsAuth(true)
    }



    const setLogout = async()=>{
        setCheckingAuthLoading(true)
        const userdatavalue = {email:'',token:'',id:'',username:'',name:''}
        setUserData(userdatavalue)
        await Storage.remove({key:'userData'})
        setIsAuth(false)
        setCheckingAuthLoading(false)
     }

         //verificar sesion activa
    const verificar = useCallback(async()=>{
        setCheckingAuthLoading(true)
        const store=  await Storage.get({key:'userData'});
        
        if(store){
            setIsAuth(true)
            setLogin(store)
        }
        setCheckingAuthLoading(false)
    },[Storage])

    useEffect(() => {
        const ca = new AbortController(); let isActive = true;
        if (isActive) {verificar();}
        return () => {isActive = false; ca.abort();};
      }, [verificar]);


    const values = {isAuth,userData,setUserData,setLogin,setLogout,checkingAuthLoading}
    return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}


export function useAuthProvider(){
    const {isAuth,userData,setUserData,setLogin,setLogout,checkingAuthLoading} = useContext(AuthContext);
    return {isAuth,userData,setUserData,setLogin,setLogout,checkingAuthLoading}
}

export default AuthProvider;