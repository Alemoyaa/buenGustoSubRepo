import {Factura} from './../../../../../entidades/Factura';
import {Component, OnInit} from '@angular/core';

import {AlertsService} from 'src/app/services/alertServices/alerts.service';
import {FacturaService} from '../../../../../services/serviciosCliente/facturaServices/factura.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import Swal from 'sweetalert2';
import {EstadoPedidoServices} from '../../../../../services/serviciosCliente/estadoPedidoServices/estadoPedido.service';
import {PedidoServices} from '../../../../../services/serviciosCliente/pedidoServices/pedido.service';
import {EstadoPedido} from '../../../../../entidades/EstadoPedido';

@Component({
  selector: 'app-facturacion-cajero',
  templateUrl: './facturacion-cajero.component.html',
  styleUrls: ['./facturacion-cajero.component.css'],
})
export class FacturacionCajeroComponent implements OnInit {
  facturas: Array<Factura> = [];
  factura: Factura;
  facturaSeleccionada: Factura;

  formularioEstado: FormGroup;

  filtroBuscador: any = '';
  pageActual: number = 1;
  pedidosEnDelivery: Factura[] = [];

  constructor(
    private fb: FormBuilder,
    private facturaService: FacturaService,
    private alerts: AlertsService,
    private pedidoService: PedidoServices,
    private estadoPedidoService: EstadoPedidoServices
  ) {
  }

  get filtrar(): Factura[] {
    const matcher = new RegExp(this.filtroBuscador, 'i');
    return this.facturas.filter((factura) => {
      return matcher.test(
        [
          factura.pedidofacturado.clientePedido.nombre,
          factura.pedidofacturado.clientePedido.apellido,
        ].join()
      );
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

  ngOnInit(): void {
    this.getPedidosPendientes();
  }


  getPedidosPendientes() {
    this.facturaService.getAll().subscribe(
      (data) => {
        data.filter((factura) => {
          if (factura.pedidofacturado.estadoPedido.nombreEstado === 'Listo') {
            return this.facturas.push(factura);
          } else if (
            factura.pedidofacturado.estadoPedido.nombreEstado === 'En camino'
          ) {
            this.facturas.push(factura);
          }
          // console.log(this.facturas);
        });
        //this.pedidos = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  mostrarFactura(factura) {
    this.factura = factura;
    console.log(this.factura);
  }

  enviarADomicilio(factura: Factura, iterador: number) {
    const estadoPedido = new EstadoPedido();
    estadoPedido.id = 5;
    estadoPedido.nombreEstado = 'En camino';
    Swal.fire({
        title: `Realmente desea cambiar el estado del pedido a 'En camino'?`,
        text:
          'Recuerda que una vez asignado un nuevo estado, no podrás volver a cambiarlo!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, modificar estado',
        cancelButtonText: 'Cancelar modificación',
      }).then((result) => {
        if (result.value) {
          this.pedidoService.editarEstadoPedido(
            factura.id,
            estadoPedido
          ).subscribe(
            (res) => {
              console.log('estado enviado', estadoPedido);
              console.log('respuesta backend', res);
              this.facturas[iterador].pedidofacturado = res;
              Swal.fire(
                `El estado de su pedido fue modificado correctamente  a 'En camino'`,
                'Puedes continuar con mas pedidos en la sección de Estados de Pedidos!',
                'success'
              );
            }, (error) => {
              console.log(error);
            }
          );
        } else {
          Swal.fire(
            `Estado no editado`,
            '',
            'info'
          );
        }
      });
  }
}
