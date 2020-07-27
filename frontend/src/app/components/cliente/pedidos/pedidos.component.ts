import { PedidoServices } from './../../../services/serviciosCliente/pedidoServices/pedido.service';
import { Pedido } from './../../../entidades/Pedido';
import { Component, OnInit, Input } from '@angular/core';
import { Cliente } from 'src/app/entidades/Cliente';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css'],
})
export class PedidosComponent implements OnInit {
  @Input() clienteUser: Cliente;
  parametro: any = '';
  pedidosCliente: Pedido[] = [];

  @Input() set parametroBusqueda(param) {
    if (param) {
      this.parametro = param;
    } else {
      this.parametro = '';
    }
  }
  constructor(private servicio: PedidoServices) { }

  ngOnInit() {
    this.getAll();
  }

  async getAll() {
    await this.servicio.getAll().subscribe(
      (data) => {
        data.forEach((pedido) => {
          if (
            this.clienteUser.usuario.uid_firebase ===
            pedido.clientePedido.usuario.uid_firebase
          ) {
            this.pedidosCliente.push(pedido);
          }
        });
      },
      (error) => {
        console.log('Error');
      }
    );
  }


  get filtrarPedidos(): Pedido[] {

    var matcher = new RegExp(this.parametro, 'i');

    return this.pedidosCliente.filter(function (pedido) {
      return matcher.test([
        pedido.clientePedido.nombre,
        pedido.clientePedido.apellido,
        pedido.clientePedido.telefono,
        pedido.estadoPedido.nombreEstado,
        pedido.numero,
        pedido.totalPedido,
        pedido.tipo_Envio,
      ].join());

    });
  }
}
