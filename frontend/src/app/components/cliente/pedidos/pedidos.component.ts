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

  pedidosCliente: Pedido[] = [];

  constructor(private servicio: PedidoServices) {}

  ngOnInit() {
    this.getAll();
  }

  async getAll() {
    await this.servicio.getAll().subscribe(
      (data) => {
        data.forEach((pedido) => {
          if (
            this.clienteUser.usuario.uid_firebase ===
            pedido.ClientePedido.usuario.uid_firebase
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
}
