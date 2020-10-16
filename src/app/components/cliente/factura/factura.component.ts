import { Cliente } from './../../../entidades/Cliente';
import { FacturaService } from './../../../services/serviciosCliente/facturaServices/factura.service';
import { Factura } from './../../../entidades/Factura';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.css'],
})
export class FacturaComponent implements OnInit {
  cliente: Cliente;
  parametro: any = '';
  @Input() set clienteUser(cliente) {
    this.cliente = cliente;
  };

  @Input() set parametroBusqueda(param) {
    if (param) {
      this.parametro = param;
    } else {
      this.parametro = '';
    }
  }

  facturaCliente: Factura[] = [];

  constructor(private servicio: FacturaService) { }

  ngOnInit() {

    this.getAll();

  }

  async getAll() {

    await this.servicio.getAll().subscribe(
      (data) => {
        data.forEach((factura) => {
          // let uid = ;

          if (
            this.cliente.usuario.uid_firebase === factura.pedidofacturado.clientePedido.usuario.uid_firebase
          ) {
            this.facturaCliente.push(factura);

          }
        });
        // this.facturaCliente = data
      },
      (error) => {
        console.log('Error');
      }
    );
  }


  get filtrarFacturas(): Factura[] {

    var matcher = new RegExp(this.parametro, 'i');

    return this.facturaCliente.filter(function (factura) {
      return matcher.test([
        factura.nroFactura,
        factura.nroTarjeta,
        factura.tipoFactura,
        factura.totalFactura,
        factura.formaPago,
        factura.pedidofacturado.tipo_Envio,
        factura.pedidofacturado.estadoPedido.nombreEstado
      ].join());

    });
  }
}
