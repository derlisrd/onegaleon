export const CONSTANTES = {
    modosMovimientos: [
        {key:'0', id:0, label:'SALIDA', value:'SALIDA', disabled:false},
      {key:'1', id:1, label:'ENTRADA', value:'ENTRADA'},
    ],
    modos:[
      {
          id: '1', // acts as primary key, should be unique and non-empty string
          label: 'ENTRADA',
          value: '1'
      },
      {
          id: '0',
          label: 'SALIDA',
          value: '0'
      }
  ]
}