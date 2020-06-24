import { EstadoPedido } from './../../../../../entidades/EstadoPedido';
import { EstadoPedidoServices } from './../../../../../services/serviciosCliente/estadoPedidoServices/estadoPedido.service';
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
  public estados: EstadoPedido[] = []
  public estadoSeleccionado: any;

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


  constructor(private pedidoService: PedidoServices,
    private estadoService: EstadoPedidoServices) { }

  async ngOnInit() {
    await this.getAllPedidos();
    await this.getAllEstados();
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


  //Traer estados de pedido
  getAllEstados() {
    this.estadoService.getAll().subscribe(
      (res) => {
        this.estados = res;
        console.log(this.estados);
      },
      (error) => {
        console.warn("error =>  ", error);
      }
    );
  }

  //para setearle al pedido un estado
  seleccionarEstado(id: number) {
    console.log(id);

    if (id != null) {

      this.estadoService.getOne(id).subscribe((estado) => {

        this.estadoSeleccionado = estado;
        console.log(estado)

        // this.formStock.controls.unidadMedidaID.setValue({
        //   id: unidad.id,
        //   denominacion: unidad.denominacion,
        //   abreviatura: unidad.abreviatura
        // });

      });
    }
    // console.log(this.formStock.value)

  }



}
