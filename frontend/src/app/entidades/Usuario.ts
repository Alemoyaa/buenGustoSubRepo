import { Rol } from 'src/app/entidades/Rol';
import { Common } from './Common';
export class Usuario extends Common {
  email: string;
  rol: Rol;
  uid_firebase: string;
}
