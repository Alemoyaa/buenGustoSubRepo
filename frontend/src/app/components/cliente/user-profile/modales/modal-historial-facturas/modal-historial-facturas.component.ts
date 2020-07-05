import { Component, OnInit, Input } from '@angular/core';
import { Cliente } from 'src/app/entidades/Cliente';

@Component({
  selector: 'app-modal-historial-facturas',
  templateUrl: './modal-historial-facturas.component.html',
  styleUrls: ['./modal-historial-facturas.component.css']
})
export class ModalHistorialFacturasComponent implements OnInit {
  cliente: Cliente;
  @Input() set clienteUser(cliente) {
    this.cliente = cliente;
  };
  constructor() { }

  ngOnInit(): void {
  }

}
