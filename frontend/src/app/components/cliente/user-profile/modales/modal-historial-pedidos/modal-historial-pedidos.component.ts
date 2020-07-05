import { Component, OnInit, Input } from '@angular/core';
import { Cliente } from 'src/app/entidades/Cliente';

@Component({
  selector: 'app-modal-historial-pedidos',
  templateUrl: './modal-historial-pedidos.component.html',
  styleUrls: ['./modal-historial-pedidos.component.css']
})
export class ModalHistorialPedidosComponent implements OnInit {
  cliente: Cliente;
  @Input() set clienteUser(cliente) {
    this.cliente = cliente;
  };
  constructor() { }

  ngOnInit(): void {
  }

}
