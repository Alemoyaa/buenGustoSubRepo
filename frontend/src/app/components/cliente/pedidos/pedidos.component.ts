import { Usuario } from '../../../entidades/Usuario';
import { PedidosServices } from './../../../services/serviciosCliente/pedidosServices/pedidos.service';
import { ActivatedRoute } from '@angular/router';
import { Pedido } from './../../../entidades/Pedido';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  @Input() clienteUser: Usuario;

  pedidosCliente: Pedido[] = [];

  constructor(
    private rutaActiva: ActivatedRoute,
    private servicio: PedidosServices
  ) { }

  ngOnInit() {
    this.getAll();
  }

  async getAll() {
    await this.servicio.getAll().subscribe((data) => {
      data.forEach(pedido => {
        if (this.clienteUser.id === pedido.cliente.id) {
          this.pedidosCliente.push(pedido);
          console.log(this.pedidosCliente);
        }
      })
    });
  }



}
