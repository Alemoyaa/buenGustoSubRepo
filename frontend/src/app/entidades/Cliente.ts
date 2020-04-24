import { Domicilio } from './Domicilio';
import { Common } from './Common';
import { Rol } from './Rol';
export class Cliente extends Common {
  uidFirebase: string;
  nombre: string;
  apellido: string;
  telefono: number;
  email: string;
  foto?: string;
  rol: Rol;
}
