import { Common } from './Common';
import {Localidad} from "./Localidad";

export class Domicilio extends Common {
  calle: string;
  numero: number;
  departamento: string;
  localidadID: Localidad;
  piso: number;
  aclaracion: string;
}
