import { Common } from './Common';
import {Domicilio} from './Domicilio';

export class DatosEmpresa extends Common {
  domicilioID: Domicilio;
  email: string;
  propietario: string;
  razonSocial: string;
  telefono: number;
}
