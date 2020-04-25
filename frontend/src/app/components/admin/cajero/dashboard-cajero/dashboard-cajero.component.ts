import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-cajero',
  templateUrl: './dashboard-cajero.component.html',
  styleUrls: ['./dashboard-cajero.component.css'],
})
export class DashboardCajeroComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  tableroPedidos = true;
  tableroFacturacion = false;

  clearBoards() {
    this.tableroPedidos = false;
    this.tableroFacturacion = false;
  }

  setBoard(board) {
    this.clearBoards();
    if (board === 'tableroPedidos') {
      this.tableroPedidos = true;
    }
    if (board === 'tableroFacturacion') {
      this.tableroFacturacion = true;
    }
  }
}
