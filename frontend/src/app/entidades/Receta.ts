import { ArticuloManufacturado } from 'src/app/entidades/ArticuloManufacturado';
import { Common } from './Common';

export class Receta extends Common {
    nombreReceta: string;
    fechaDeAlta: Date;
    fechaDeBaja: Date;
    articuloManufacturado: ArticuloManufacturado;
}