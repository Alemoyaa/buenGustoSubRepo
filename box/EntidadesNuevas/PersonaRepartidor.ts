import {Common} from "./Common";

export class PersonaRepartidor extends Common{
    patenteVehicular: string
    tipoVehiculo: string
    categoriaCarnet: string
    fecha_emision_carnet: Date
    fecha_vencimiento_carnet: Date
}
