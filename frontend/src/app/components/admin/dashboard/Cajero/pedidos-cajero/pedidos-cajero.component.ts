import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pedidos-cajero',
  templateUrl: './pedidos-cajero.component.html',
  styleUrls: ['./pedidos-cajero.component.css'],
})
export class PedidosCajeroComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  tiempoEstimado: any;
  tiempoDelivery: any = 10;
}
