import {Usuario} from "./Usuario";
import {Common} from "./Common";
import {Domicilio} from "./Domicilio";

export abstract class Persona extends Common{
    nombre: string
    apellido: string
    telefono: number
    fechaAlta: Date
    fechaBaja: Date
    lista_domicilio: Domicilio[]
    usuarioID: Usuario
}
