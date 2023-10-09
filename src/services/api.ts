import axios from 'axios';
import { translateLoginError } from './errorhandler';
import { ENV } from '../config/env';
import { postDataReponse } from '../models/post';



const api = axios.create({baseURL:ENV.baseURL,headers:{'x-api-key':ENV.xapikey}})

export const APICALLER = {
    post: async({url,data,token}:{url:string,data:{},token:string})=>{
        try {
            const res = await api.post(url,data,{headers:{'Authorization':`Bearer ${token}`}});
            return res.data;
         } catch (error: any) {
             return {success:false, error: error.message, message: translateLoginError(error.response.status) }
         }
    },
    get:  async({url,token}:{url:string,token:string})=>{
        try {
            const res : postDataReponse = await api.get(url,{headers:{'Authorization':`Bearer ${token}`}});
            return res.data;
         } catch (error: any) {
             return {success:false, error: error.message, message: translateLoginError(error.response.status) }
         }
    },
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

