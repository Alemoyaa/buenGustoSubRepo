import {Factura} from './../../../../../entidades/Factura';
import {Component, OnInit} from '@angular/core';

import {AlertsService} from 'src/app/services/alertServices/alerts.service';
import {FacturaService} from '../../../../../services/serviciosCliente/facturaServices/factura.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Pedido} from '../../../../../entidades/Pedido';
import Swal from "sweetalert2";
import {EstadoPedidoServices} from '../../../../../services/serviciosCliente/estadoPedidoServices/estadoPedido.service';
import {PedidoServices} from '../../../../../services/serviciosCliente/pedidoServices/pedido.service';

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
    this.crearFormulario();
  }

  crearFormulario() {
    this.formularioEstado = this.fb.group({
      id: 0,
      nombreEstado: '',
    });
  }

  getPedidosPendientes() {
    this.facturaService.getAll().subscribe((data) => {
      data.filter((factura) => {
        if (factura.pedidofacturado.estadoPedido.nombreEstado === 'Listo') {
          return this.facturas.push(factura);
        } else if (
          factura.pedidofacturado.estadoPedido.nombreEstado === 'En camino'
        ) {
          console.log('Factura de pedido en camino');
          this.facturas.push(factura);
        }
        // console.log(this.facturas);
      });

      //this.pedidos = data;
    }, error => {
      console.log(error);
    });
  }

  mostrarFactura(factura) {
    this.factura = factura;
    console.log(this.factura);
  }

  seleccionarEstado(id: number, factura: Factura) {
    console.log(id);
    console.log(factura);
    this.facturaSeleccionada = factura;
    this.estadoPedidoService.getOne(id).subscribe((estado) => {
      Swal.fire({
        title: `Realmente desea cambiar el estado del pedido a ${estado.nombreEstado}?`,
        text:
          'Recuerda que una vez asignado un nuevo estado, no podras volver a cambiarlo!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, modificar estado',
        cancelButtonText: 'Cancelar modificacion',
      }).then((result) => {
        if (result.value) {
          console.log(estado);
          this.formularioEstado.setValue({
            id: estado.id,
            nombreEstado: estado.nombreEstado,
          });
          console.log(this.formularioEstado.value);

          this.facturaSeleccionada.pedidofacturado.estadoPedido.id = this.formularioEstado.value.id;
          this.facturaSeleccionada.pedidofacturado.estadoPedido.nombreEstado = this.formularioEstado.value.nombreEstado;

          this.pedidoService
            .editarEstadoPedido(
              this.facturaSeleccionada.id,
              this.facturaSeleccionada.pedidofacturado.estadoPedido
            )
            .subscribe();
          console.log(this.facturaSeleccionada);

          Swal.fire(
            `El estado de su pedido fue modificado correctamente a: ${estado.nombreEstado}`,
            'Puedes continuar con mas pedidos en la seccion de Estados de Pedidos!',
            'success'
          );
          this.getPedidosPendientes();
          this.formularioEstado.reset();
        } else {
          this.formularioEstado.reset();
        }
      });
    });
  }

}
