import { FormBuilder, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';
import { EstadoPedido } from './../../../../../entidades/EstadoPedido';
import { EstadoPedidoServices } from './../../../../../services/serviciosCliente/estadoPedidoServices/estadoPedido.service';
import { PedidoServices } from './../../../../../services/serviciosCliente/pedidoServices/pedido.service';

import { Pedido } from './../../../../../entidades/Pedido';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gestor-ordenes-cocinero',
  templateUrl: './gestor-ordenes-cocinero.component.html',
  styleUrls: ['./gestor-ordenes-cocinero.component.css']
})
export class GestorOrdenesCocineroComponent implements OnInit {

  public pedidos: Pedido[] = []
  public pedidoOne: Pedido;
  pedidoSeleccionado: Pedido;
  public estados: EstadoPedido[] = []
  public estadoSeleccionado: any;
  horaSeleccionada: Date;

  formularioEstado: FormGroup;
  public pageActual = 1; //Paginador

  public pedido: Pedido = {
    id: null,
    fechaRealizacion: new Date(),
    hora_estimada_fin: new Date(),
    numero: null,
    tipo_Envio: null,
    lista_detallePedido: [{
      id: null,
      articulo: null,
      cantidad: null,
      subtotal: null,
      aclaracion: ''
    }],
    estadoPedido: {
      id: null,
      nombreEstado: ''
    },
    clientePedido: null
  }


  constructor(private pedidoService: PedidoServices,
    private estadoService: EstadoPedidoServices,
    private fb: FormBuilder) { }

  async ngOnInit() {
    await this.getAllPedidos();
    await this.getAllEstados();
    this.crearFormulario();
  }

  crearFormulario() {
    this.formularioEstado = this.fb.group({
      id: 0,
      nombreEstado: ''
    });
  }

  //Me trae los pedidos confirmados por el cajero
  getAllPedidos() {
    this.esperarAlert();
    this.pedidoService.getAll().subscribe(
      (res) => {
        console.log(res);
        res.filter((pedido) => {
          if (pedido.estadoPedido.nombreEstado === 'Confirmado' || pedido.estadoPedido.nombreEstado === 'Preparando') {
            return this.pedidos.push(pedido);
          }
        })
        console.log(this.pedidos);
        Swal.fire({
          icon: 'success',
          title: 'Datos cargados',
          showConfirmButton: false,
          timer: 1200,
        });
      },
      (error) => {
        console.warn("error =>  ", error);
      }
    );
  }

  async getOnePedido(pedido) {
    this.pedidoOne = pedido;
    console.log(this.pedidoOne)
  }

  getHora(hora: Date) {
    this.horaSeleccionada = hora;
    console.log(this.horaSeleccionada);
    this.sumarMinutos(this.horaSeleccionada, 10);
    //return Date;
  }

  sumarMinutos(hora, minutos) {
    alert(hora);
    hora.setMinutes(hora.getMinutes() + 10);
    alert(hora);
  }


  //Traer estados de pedido, traerme solo los confirmados
  getAllEstados() {
    this.estadoService.getAll().subscribe(
      (res) => {
        this.estados = res;
        // console.log(this.estados);
      },
      (error) => {
        console.warn("error =>  ", error);
      }
    );
  }


  //para setearle al pedido un estado
  seleccionarEstado(id: number, pedido: Pedido) {
    this.pedidoSeleccionado = pedido;
    this.estadoService.getOne(id).subscribe(
      (estado) => {

        Swal.fire({
          title: `Realmente desea cambiar el estado del pedido `,
          text: "Recuerda que una vez asignado un nuevo estado, no podras volver a cambiarlo!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Si, modificar estado',
          cancelButtonText: 'Cancelar modificacion'
        }).then((result) => {
          if (result.value) {

            this.formularioEstado.setValue({
              id: estado.id,
              nombreEstado: estado.nombreEstado
            });

            this.pedidoSeleccionado.estadoPedido = new EstadoPedido();
            this.pedidoSeleccionado.estadoPedido.id = this.formularioEstado.value.id;
            this.pedidoSeleccionado.estadoPedido.nombreEstado = this.formularioEstado.value.nombreEstado;
            this.pedidoService.editarEstadoPedido(this.pedidoSeleccionado.id, this.pedidoSeleccionado.estadoPedido).subscribe();

            console.log(this.pedidoSeleccionado.estadoPedido.id)
            Swal.fire(
              `El estado de su pedido fue modificado correctamente a: `,
              'Puedes continuar con mas pedidos en la seccion de Estados de Pedidos!',
              'success'
            );

            if (this.pedidoSeleccionado.estadoPedido.id === 7) {
              window.location.reload();
            }
            // this.formularioEstado.reset();

          } else {
            this.formularioEstado.reset();
          }
        });
      },
      (error) => {
        console.warn("error =>  ", error);
      }
    );
  }

  esperarAlert() {
    Swal.fire({
      title: 'Por favor espere',
      html: 'Recuperando los datos...',
      // timer: 1500,
      onBeforeOpen: () => {
        Swal.showLoading();
      },
    }).then((result) => {
      console.log(result);
    });
  }


}
