import { Component, OnInit } from '@angular/core';
import { Pedido } from 'src/app/entidades/Pedido';
import { PedidoServices } from '../../../../../services/serviciosCliente/pedidoServices/pedido.service';

import { AlertsService } from 'src/app/services/alertServices/alerts.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';
import { EstadoPedidoServices } from 'src/app/services/serviciosCliente/estadoPedidoServices/estadoPedido.service';


@Component({
  selector: 'app-pedidos-cajero',
  templateUrl: './pedidos-cajero.component.html',
  styleUrls: ['./pedidos-cajero.component.css'],
})
export class PedidosCajeroComponent implements OnInit {
  pedidoSeleccionado: Pedido;
  pedidos: Array<Pedido> = [];
  formularioEstado: FormGroup;
  pageActual: number = 1;
  filtroBuscador: any = '';
  // Pedido.ts
  // fechaRealizacion: Date;
  // hora_estimada_fin: any;
  // numero: number;
  // tipo_Envio: boolean;
  // lista_detallePedido: DetallePedido[];
  // estadoPedido: EstadoPedido;
  // clientePedido: Cliente;

  constructor(
    private fb: FormBuilder,
    private pedidoService: PedidoServices,
    private alerts: AlertsService,
    private estadoPedidoService: EstadoPedidoServices) {

  }

  ngOnInit(): void {
    this.getPedidosPendientes();
    this.crearFormulario();
    // this.alerts.mensajeSuccess('Bienvenido al tablero de Pedidos del modulo Cajero', 'Aqui usted podra aceptar y enviar a cocina o rechazar pedidos entrantes');
  }
 

  get filtrar(): Pedido[] {

    const matcher = new RegExp(this.filtroBuscador, 'i');
    return this.pedidos.filter((pedido) => {

      return matcher.test([pedido.clientePedido.nombre, pedido.clientePedido.apellido].join());


    });
  }



  getPedidosPendientes() {

    this.pedidoService.getAll().subscribe(

      data => {
        data.filter((pedido) => {

          if (pedido.estadoPedido.nombreEstado === 'Pendiente') {

          return this.pedidos.push(pedido);
          }
        });


      }

    );

  }

  crearFormulario() {
    this.formularioEstado = this.fb.group({
      id: 0,
      nombreEstado: ''
    });
  }

  seleccionarEstado(id: number, pedido: Pedido) {
    console.log(id);
    console.log(pedido);
    this.pedidoSeleccionado = pedido;
    this.estadoPedidoService.getOne(id).subscribe(estado => {

      Swal.fire({
        title: `Realmente desea cambiar el estado del pedido a ${estado.nombreEstado}?`,
        text: "Recuerda que una vez asignado un nuevo estado, no podras volver a cambiarlo!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, modificar estado',
        cancelButtonText: 'Cancelar modificacion'
      }).then((result) => {
        if (result.value) {


          console.log(estado);
          this.formularioEstado.setValue({
            id: estado.id,
            nombreEstado: estado.nombreEstado
          });
          console.log(this.formularioEstado.value);

          this.pedidoSeleccionado.estadoPedido.id = this.formularioEstado.value.id;
          this.pedidoSeleccionado.estadoPedido.nombreEstado = this.formularioEstado.value.nombreEstado;

          // this.pedidoService.put(this.pedidoSeleccionado.id, this.pedidoSeleccionado).subscribe();
          console.log(this.pedidoSeleccionado);

          Swal.fire(
            `El estado de su pedido fue modificado correctamente a: ${estado.nombreEstado}`,
            'Puedes continuar con mas pedidos en la seccion de Estados de Pedidos!',
            'success'
          );

          this.formularioEstado.reset();
        } else {
          this.formularioEstado.reset();
        }
      });




    });



  }


}
