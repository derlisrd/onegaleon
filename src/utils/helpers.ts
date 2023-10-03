export const helpers = {

    validarMail: (email: string)=>{
        
            return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email);
          
    }

}