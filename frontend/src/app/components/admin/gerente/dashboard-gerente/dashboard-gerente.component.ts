import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-gerente',
  templateUrl: './dashboard-gerente.component.html',
  styleUrls: ['./dashboard-gerente.component.css'],
})
export class DashboardGerenteComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  tableroPizzaCrud = true;
  tableroStock = false;
  tableroEstadisticas = false;
  tableroUsuario = false;

  clearBoards() {
    this.tableroPizzaCrud = false;
    this.tableroStock = false;
    this.tableroEstadisticas = false;
    this.tableroUsuario = false;
  }

  setBoard(board) {
    this.clearBoards();
    if (board === 'tableroPizzaCrud') {
      this.tableroPizzaCrud = true;
    }
    if (board === 'tableroStock') {
      this.tableroStock = true;
    }
    if (board === 'tableroEstadisticas') {
      this.tableroEstadisticas = true;
    }

    if (board === 'tableroUsuario') {
      this.tableroUsuario = true;
    }
  }
}
