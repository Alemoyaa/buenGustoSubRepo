import { Common } from './Common';
import {Localidad} from './Localidad';

export class Domicilio extends Common {
  aclaracion: string;
  calle: string;
  nroDepartamento: number;
  numero: number;
  piso: number;
  localidadID: Localidad;
}
