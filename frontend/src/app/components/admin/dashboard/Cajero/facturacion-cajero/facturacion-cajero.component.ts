import { Factura } from './../../../../../entidades/Factura';
import { Component, OnInit } from '@angular/core';

import { AlertsService } from 'src/app/services/alertServices/alerts.service';
import { Pedido } from 'src/app/entidades/Pedido';
import { FacturaService } from '../../../../../services/serviciosCliente/facturaServices/factura.service';

@Component({
  selector: 'app-facturacion-cajero',
  templateUrl: './facturacion-cajero.component.html',
  styleUrls: ['./facturacion-cajero.component.css']
})
export class FacturacionCajeroComponent implements OnInit {
  facturas: Array<Factura> = [];
  factura: Factura;
  filtroBuscador: any = '';
  pageActual: number = 1;
  constructor(private facturaService: FacturaService, private alerts: AlertsService,) { }

  ngOnInit(): void {
    this.getPedidosPendientes();
  }

  get filtrar(): Factura[] {

    const matcher = new RegExp(this.filtroBuscador, 'i');
    return this.facturas.filter((factura) => {
      return matcher.test([factura.pedidofacturado.clientePedido.nombre, factura.pedidofacturado.clientePedido.apellido].join());
    });
  }
  // fecha: Date;
  // formaPago: string;
  // tipoFactura: string;
  // nroFactura: number;
  // precioTotal: number;
  // pedidofacturado: Pedido;
  // detalleFactura: DetalleFactura[];
  // datosEmpresaID: DatosEmpresa;

  getPedidosPendientes() {

    this.facturaService.getAll().subscribe(

      data => {
        data.filter((factura) => {

          if (factura.pedidofacturado.estadoPedido.id === 4 || factura.pedidofacturado.estadoPedido.id === 5) {
            // console.log(factura);
            return this.facturas.push(factura);
          }
          // console.log(this.facturas);
        });

        //this.pedidos = data;
      }

    );
 
  }

  mostrarFactura(factura){
    this.factura = factura;
    console.log(this.factura);
  }
}
