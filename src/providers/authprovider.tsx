import { createContext,useContext, useEffect,useCallback,useState, ReactNode, SetStateAction } from "react";
import { loginDataResponse } from "../models/login";
import { Storage } from "../utils/storage";
import { movimientoStoreForm } from "../domains/types/movimientoStoreForm.type";




interface MyContextProps {
    isAuth: boolean,
    userData:loginDataResponse,
    setUserData:SetStateAction<{}>,
    setLogin:(data: loginDataResponse)=>void
    setLogout:()=>void
    checkingAuthLoading: boolean
    setearMovimientoStore:(nuevo: movimientoStoreForm)=>void
  }
  


const AuthContext = createContext<MyContextProps>({
    isAuth: false,
    userData:{email:'',token:'',id:'',username:'',name:''},
    setUserData:()=>{},
    setLogin:()=>{},
    setLogout:()=>{},
    checkingAuthLoading:true,
    setearMovimientoStore: ()=>{}
})




function AuthProvider({children}:{children: ReactNode})  {

    const [isAuth,setIsAuth] = useState<boolean>(false);
    const [checkingAuthLoading,setCheckingAuthLoading] = useState(true)
    const [userData,setUserData] = useState<loginDataResponse>({email:'',token:'',id:'',username:'',name:''})
    const [movimientos,setMovimientos] = useState<movimientoStoreForm[]>([])

    const setLogin = async(data: loginDataResponse)=>{
       setUserData(data)
       await Storage.set({key:'userData',value:data})
       await Storage.set({key:'movimientos',value:[]})
       setIsAuth(true)
    }


    const setearMovimientoStore = async(nuevo : movimientoStoreForm)=>{
        
        let m = [...movimientos]
        m.push(nuevo) 
        setMovimientos(m)
        await Storage.set({key:'movimientos',value: m})
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
        const store =  await Storage.get({key:'userData'});
        const movStore = await Storage.get({key:'movimientos'})
        if(movStore){
            setMovimientos(movStore)
        }
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


    const values = {isAuth,userData,setUserData,setLogin,setLogout,checkingAuthLoading,setearMovimientoStore}
    return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}


export function useAuthProvider(){
    const {isAuth,userData,setUserData,setLogin,setLogout,checkingAuthLoading,setearMovimientoStore} = useContext(AuthContext);
    return {isAuth,userData,setUserData,setLogin,setLogout,checkingAuthLoading,setearMovimientoStore}
}

export default AuthProvider;