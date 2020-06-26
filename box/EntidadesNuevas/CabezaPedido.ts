import {Common} from "./Common";
import {HistoricoEstado} from "./HistoricoEstado";
import {EstadoPedido} from "./EstadoPedido";
import {CabezaFactura} from "./CabezaFactura";
import {PersonaCliente} from "./PersonaCliente";
import {PersonaRepartidor} from "./PersonaRepartidor";
import {PersonaCocinero} from "./PersonaCocinero";
import {PersonaCajero} from "./PersonaCajero";

export class CabezaPedido extends Common{
    fechaRealizado: Date
    hora_estimada_fin: Date
    numero: number
    tipo_envio: boolean

    lista_historicoEstado: HistoricoEstado[]
    estadoPedidoID: EstadoPedido
    cabezaFacturaID: CabezaFactura

    clienteID: PersonaCliente
    repartidorID: PersonaRepartidor
    cocineroID: PersonaCocinero
    cajeroID: PersonaCajero

    //DetallePedido
}
