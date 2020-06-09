import {Common} from "./Common";
import {Rol} from "./Rol";
import {HistoricoRol} from "./HistoricoRol";

export class Usuario extends Common{
    email: string
    rolID: Rol
    uid_firebase: string
    lista_historicoRol: HistoricoRol[]
}
