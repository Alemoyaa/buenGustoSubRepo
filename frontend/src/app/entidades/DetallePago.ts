import { Factura } from './Factura';
import { Common } from './Common';

export class DetallePago extends Common {
    nombreTitular: string;
    numeroTarjeta: string;
    factura: Factura;
}