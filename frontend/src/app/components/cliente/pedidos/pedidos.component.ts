import { Cliente } from './../../../entidades/Cliente';
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

  @Input() clienteUser : Cliente;

  pedidosCliente : Pedido[] = [];

  constructor(
    private rutaActiva: ActivatedRoute,
    private servicio: PedidosServices
    ) { }

  ngOnInit() {
    console.log(this.clienteUser);
    this.rutaActiva.params.subscribe(data => {
      if (data.id !== '0') {
        this.getOne(data.id);
      }
    });
  }

  /*getAll() {
    this.servicio.getAll().subscribe((data) => {
      this.pedidosCliente = data;
      console.log(this.pedidosCliente);
    });
  }*/

  getOne(id: number) {
    this.servicio.getOne(id).subscribe((data) => {
      this.pedidosCliente.push(data);
    });
  }


}
