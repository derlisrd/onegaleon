export const helpers = {

    validarMail: (email: string)=>{
        
            return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email);
          
    },
    numberFormant : (n : number | string)=> {
      if(typeof n === 'number'){
        return (n).toLocaleString("de-DE")
      }
      return ( parseFloat(n)).toLocaleString("de-DE") 
    },
    fechadMY: (fecha: string)=>{
      // Convertimos la fecha a un objeto Date
        const fechaObjeto = new Date(fecha);

        // Obtenemos el día, el mes y el año de la fecha
        const dia = fechaObjeto.getDate();
        const mes1 = fechaObjeto.getMonth() + 1;
        const anio = fechaObjeto.getFullYear();
        const meses = ['','ene','feb','mar','abr','may','jun','jul','agos','set','oct','nov','dice']
        // Formateamos la fecha
        const fechaFormateada = `${dia}-${meses[mes1]}-${anio}`;
        
        return fechaFormateada;
    },
    mesActualString: ()=>{
      // Crear una nueva instancia de Date
        const fechaActual = new Date();

        // Array con los nombres de los meses
        const nombresMeses = [
          "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
          "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
        ];

        // Obtener el mes actual (0-11) y usarlo como índice para el array de nombres
        return nombresMeses[fechaActual.getMonth()];
    }

}