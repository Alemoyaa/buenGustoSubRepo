import { PedidoServices } from './../../../../../services/serviciosCliente/pedidoServices/pedido.service';

import { Pedido } from './../../../../../entidades/Pedido';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gestor-ordenes-cocinero',
  templateUrl: './gestor-ordenes-cocinero.component.html',
  styleUrls: ['./gestor-ordenes-cocinero.component.css']
})
export class GestorOrdenesCocineroComponent implements OnInit {

  public pedidos: Pedido[] = []
  public pedidoOne: Pedido;


  public pedido: Pedido = {
    id: null,
    fechaRealizacion: new Date(),
    hora_estimada_fin: null,
    numero: null,
    tipo_Envio: null,
    lista_detallePedido:  [{
      id: null,
      articulo: null,
      cantidad: null,
      subtotal: null
    }],
    estadoPedido: null,
    clientePedido: null
  }


  constructor(private pedidoService: PedidoServices) { }

  async ngOnInit() {
    await this.getAllPedidos();
  }

  getAllPedidos() {
    this.pedidoService.getAll().subscribe(
      (res) => {
        this.pedidos = res;
        console.log(this.pedidos);
      },
      (error) => {
        console.warn("error =>  ", error);
      }
    );
  }

  async getOnePedido(id: number) {
    await this.pedidoService.getOne(id).subscribe(
      (res) => {
        this.pedidoOne = res;
        console.log(this.pedidoOne);
      },
      (error) => {
        console.warn("error =>  ", error);
      }
    );
  }



}
