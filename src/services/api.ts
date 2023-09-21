import axios from 'axios';


const api = axios.create({baseURL:'https://ovispa.saeta.app',headers:{'x-api-key':'s9d1e5xx'}})

export const APICALLER = {

    login: async ({email,password}:{email: String, password: String})=>{

        try {
           const res = await api.post('/auth/login',{email,password});
           return res.data;
        } catch (error) {
            return {sucess:false,error:error}
        }

    }

}