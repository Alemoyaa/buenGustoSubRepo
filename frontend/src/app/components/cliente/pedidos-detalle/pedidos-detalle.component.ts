import { Usuario } from '../../../entidades/Usuario';
import { PedidoServices } from './../../../services/serviciosCliente/pedidoServices/pedido.service';
import { ActivatedRoute } from '@angular/router';
import { Pedido } from './../../../entidades/Pedido';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pedidos-detalle',
  templateUrl: './pedidos-detalle.component.html',
  styleUrls: ['./pedidos-detalle.component.css'],
})
export class PedidosDetalleComponent implements OnInit {
  pedidoDetalle: Pedido = new Pedido();

  constructor(
    private rutaActiva: ActivatedRoute,
    private servicio: PedidoServices
  ) {}

  ngOnInit(): void {
    this.rutaActiva.params.subscribe((data) => {
      if (data.id !== '0') {
        this.getOne(data.id);
      }
    });
  }

  async getOne(id: number) {
    await this.servicio.getOne(id).subscribe((data) => {
      this.pedidoDetalle = data;
      console.log(this.pedidoDetalle);
    });
  }
}
