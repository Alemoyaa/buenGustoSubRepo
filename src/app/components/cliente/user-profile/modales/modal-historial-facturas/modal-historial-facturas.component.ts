import { Component, OnInit, Input } from '@angular/core';
import { Cliente } from 'src/app/entidades/Cliente';
import { Factura } from '../../../../../entidades/Factura';
import { EstadoPedidoServices } from 'src/app/services/serviciosCliente/estadoPedidoServices/estadoPedido.service';
import { EstadoPedido } from '../../../../../entidades/EstadoPedido';

@Component({
  selector: 'app-modal-historial-facturas',
  templateUrl: './modal-historial-facturas.component.html',
  styleUrls: ['./modal-historial-facturas.component.css']
})
export class ModalHistorialFacturasComponent implements OnInit {
  cliente: Cliente;
  filtroBuscador: any = '';
  estados: Array<EstadoPedido> = [];
  @Input() set clienteUser(cliente) {
    this.cliente = cliente;

  };
  constructor(private estadoPedidos: EstadoPedidoServices) { }

  ngOnInit(): void {
    this.traerEstadoPedidos();
  }


  seleccionarFiltro(parametro: string) {
    this.filtroBuscador = parametro;
  }


  traerEstadoPedidos() {
    this.estadoPedidos.getAll().subscribe(estados => {
      this.estados = estados;
    });
  }




}
