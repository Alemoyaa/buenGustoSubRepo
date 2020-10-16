import { Component, OnInit, Input } from '@angular/core';
import { Cliente } from 'src/app/entidades/Cliente';
import { EstadoPedidoServices } from 'src/app/services/serviciosCliente/estadoPedidoServices/estadoPedido.service';
import { EstadoPedido } from 'src/app/entidades/EstadoPedido';

@Component({
  selector: 'app-modal-historial-pedidos',
  templateUrl: './modal-historial-pedidos.component.html',
  styleUrls: ['./modal-historial-pedidos.component.css']
})
export class ModalHistorialPedidosComponent implements OnInit {
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
