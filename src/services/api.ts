import axios from 'axios';
import { translateLoginError } from './errorhandler';



const api = axios.create({baseURL:'https://ovispa.saeta.app',headers:{'x-api-key':'s9d1e5xx'}})

export const APICALLER = {

    check: async(token: string)=>{
        try {
            const res = await api.post('/auth/login',{},{headers:{'Authorization':`Bearer ${token}`}});
            return res.data;
         } catch (error: any) {
             return {success:false, error: error.message, message: translateLoginError(error.response.status) }
         }
    },
    login: async ({email,password}:{email: String, password: String}) =>{

        try {
           const res = await api.post('/auth/login',{email,password});
           return res.data;
        } catch (error: any) {
            return {success:false, error: error.message, message: translateLoginError(error.response.status) }
        }

    },
    register: async ({email,password,name}:{email: String, password: String,name:string})=>{

        try {
           const res = await api.post('/auth/register',{email,password,name});
           return res.data;
        }catch (error: any) {
            return {success:false, error: error.message, message: error.response.data.message, status: error.response.status }
        }

    }

}

