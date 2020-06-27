import { Pedido } from './../../../../../entidades/Pedido';
import { PedidoServices } from './../../../../../services/serviciosCliente/pedidoServices/pedido.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modificacion-plato-cocinero',
  templateUrl: './modificacion-plato-cocinero.component.html',
  styleUrls: ['./modificacion-plato-cocinero.component.css']
})
export class ModificacionPlatoCocineroComponent implements OnInit {
  public pedidos: Pedido[] = []
  public pedidoOne: Pedido;

  public pageActual = 1; //Paginador

  public pedido: Pedido = {
    id: null,
    fechaRealizacion: new Date(),
    hora_estimada_fin: new Date(),
    numero: null,
    tipo_Envio: null,
    lista_detallePedido: [{
      id: null,
      articulo: null,
      cantidad: null,
      subtotal: null
    }],
    estadoPedido: null,
    clientePedido: null
  }

  constructor(private pedidoService: PedidoServices ) { }

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
