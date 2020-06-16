import { Common } from './Common';
import {Usuario} from './Usuario';
import {Domicilio} from './Domicilio';

export class Cliente extends Common {
  nombre: string;
  apellido: string;
  domicilioID: Domicilio;
  telefono: number;
  usuarioID: Usuario;
}
