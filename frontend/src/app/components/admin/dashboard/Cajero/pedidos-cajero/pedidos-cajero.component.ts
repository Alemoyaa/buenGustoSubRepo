import { Component, OnInit } from '@angular/core';
import { Pedido } from 'src/app/entidades/Pedido';
import { PedidoServices } from '../../../../../services/serviciosCliente/pedidoServices/pedido.service';
import { filter } from 'rxjs/operators';
import { AlertsService } from 'src/app/services/alertServices/alerts.service';


@Component({
  selector: 'app-pedidos-cajero',
  templateUrl: './pedidos-cajero.component.html',
  styleUrls: ['./pedidos-cajero.component.css'],
})
export class PedidosCajeroComponent implements OnInit {

  pedidos: Pedido[];

  // Pedido.ts
  // fechaRealizacion: Date;
  // hora_estimada_fin: any;
  // numero: number;
  // tipo_Envio: boolean;
  // lista_detallePedido: DetallePedido[];
  // estadoPedido: EstadoPedido;
  // clientePedido: Cliente;

  constructor(
    private pedidoService: PedidoServices,
    private alerts: AlertsService) {

  }

  ngOnInit(): void {
    this.getPedidosPendientes();
    this.alerts.mensajeSuccess('Bienvenido al tablero de Pedidos del modulo Cajero', 'Aqui usted podra aceptar y enviar a cocina o rechazar pedidos entrantes');
  }


  get filtrar(): Pedido[] {

    var matcher = new RegExp('Pendiente', 'i');
    return this.pedidos.filter((pedido) => {

      return matcher.test([pedido.estadoPedido.nombreEstado].join());


    });
  }


  getPedidosPendientes() {
    this.pedidoService.getAll().subscribe(
      data => {

        this.pedidos = data;


      }

    );

  }


}
