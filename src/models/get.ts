

export type objetosMovimientos = {
    id:number 
    detalles: string
    valor: number
    modo:number
    tipo: number
    created_at: string,
    sync?: boolean
}

export type getMovimientos = Array<objetosMovimientos>;


export type movimientosResponse ={
    results:getMovimientos,
    success:boolean
}