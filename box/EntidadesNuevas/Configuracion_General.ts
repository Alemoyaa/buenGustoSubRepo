import {Common} from "./Common";
import {Horario_Laboral} from "./Horario_Laboral";

export class Configuracion_General extends Common{
    cantidad_cocineros: number;
    lista_horarios: Horario_Laboral[];
}
