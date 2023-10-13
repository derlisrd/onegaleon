export const helpers = {

    validarMail: (email: string)=>{
        
            return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email);
          
    },
    numberFormant : (n : number)=> (n).toLocaleString("de-DE"),
    fechadMY: (fecha: string)=>{
      // Convertimos la fecha a un objeto Date
        const fechaObjeto = new Date(fecha);

        // Obtenemos el día, el mes y el año de la fecha
        const dia = fechaObjeto.getDate();
        const mes1 = fechaObjeto.getMonth() + 1;
        const anio = fechaObjeto.getFullYear();
        const meses = ['ene','feb','mar','abr','may','jun','jul','agos','set','oct','nov','dice']
        // Formateamos la fecha
        const fechaFormateada = `${dia}-${meses[mes1]}-${anio}`;
        
        return fechaFormateada;
    }

}