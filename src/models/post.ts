import { objetosMovimientos } from "./get"

export type postresponse = {
    success: boolean
    results: objetosMovimientos 
}

export type postDataReponse = {
    data: postresponse
}

export type typeMovimientoResponse = {
    success: boolean
    results: movimientoType
}

export type movimientoType = {
    created_at?: string, detalles?: string, id?: number, modo?: number, valor?: string, tipo?:number
}