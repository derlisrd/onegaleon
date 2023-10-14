import { objetosMovimientos } from "./get"

export const movimientosModelInsertResponse = (json : any) : objetosMovimientos =>{

    return {
        id: json.id,
        detalles: json.detalles,
        valor: parseFloat(json.valor),
        modo: parseFloat(json.modo),
        tipo: json.tipo ?? 0,
        created_at: json.created_at
    }

}