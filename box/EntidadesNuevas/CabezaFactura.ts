import {Common} from "./Common";
import {DetalleFactura} from "./DetalleFactura";
import {DatosEmpresa} from "./DatosEmpresa";
import {FormaPago} from "./FormaPago";

export class CabezaFactura extends Common{
    tipoFactura: string
    precioTotal: number
    fecha: Date
    nroFactura: number
    lista_detalleFactura: DetalleFactura[]
    DatosEmpresaID: DatosEmpresa
    formaPagoID: FormaPago
}
