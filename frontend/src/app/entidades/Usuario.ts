import { Common } from './Common';
import { Rol } from './Rol';
export class Usuario extends Common {
  email: string;
  rol: Rol;
  uid_firebase: string;
}
