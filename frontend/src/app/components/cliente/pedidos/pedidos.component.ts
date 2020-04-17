import { ActivatedRoute } from '@angular/router';
import { Pedido } from './../../../entidades/Pedido';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  pedidosCliente : Pedido[] = [];

  constructor(
    private rutaActiva: ActivatedRoute) { }

  ngOnInit() {
    //this.getAll();
  }

  /*getAll() {
    this.servicio.getAll().subscribe((data) => {
      this.pedidosCliente = data;
      console.log(this.pedidosCliente);
    });
  }

  getOne(id: number) {
    this.servicio.getOne(id).subscribe((data) => {

    });
  }*/


}
