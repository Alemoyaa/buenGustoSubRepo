import { Domicilio } from './Domicilio';
import { Common } from './Common';
export class Cliente extends Common{
  nombre: string;
  apellido: string;
  telefono: number;
  email: string;
  domicilio: Domicilio;
  foto?: string;
}
