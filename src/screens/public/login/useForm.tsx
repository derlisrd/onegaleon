import { useState } from "react";

function useForm() {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [hidePassword,setHidePassword] = useState(true)
    const [error,setError] = useState({code:0,message:''})
    const [loading,setLoading] = useState(false)

    
    const handleHidePassword = ()=>{ setHidePassword(!hidePassword)}

    const validate = ()=>{
        if(email.length === 0){
            setError({code:1,message:'E-mail invalido'})
            return false
        }
        if(password.length === 0){
            setError({code:2,message:'Password invalido'})
            return false
        }
        setError({code:0,message:''})
        return true
    }


    return { password, setPassword, hidePassword, handleHidePassword, email, setEmail, error,validate, loading, setLoading}
}

export default useForm;