import { Domicilio } from './Domicilio';
import { Common } from './Common';
import { Rol } from './Rol';
export class Usuario extends Common {
  nombre: string;
  apellido: string;
  telefono: number;
  uidFirebase: string;
  fecha_baja: Date;
  email: string;
  foto?: string;
  rol: Rol;
  domicilio: Domicilio;
}
