import axios from 'axios'
import env from '../../env';

const BASE = axios.create({baseURL: env.API_URL, headers:{'x-api-key': env.X_API_KEY}} );


export default {
    login: async({email, password}: {email:string,password:string})=>{
        try {
            const {data} = await BASE.post('/login',{email,password})
            return {success: data.success, token: data.token}
        } catch (error) {
            return {success:false, message:'Server error'}
        }
    },
    register: async({name,email, password,passwordConfirmation}: {name:string, email:string,password:string, passwordConfirmation:string})=>{
        try {
            const {data} = await BASE.post('/register',{email,password,passwordConfirmation,name})
            return {success: data.success, token: data.token}
        } catch (error) { 
            return {success:false, message:'Server error'}
        }
    }

}