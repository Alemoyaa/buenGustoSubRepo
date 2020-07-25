import { PedidoExcel } from './../../../../../../services/excelServices/entidades/PedidoExcel';
import { ExcelService } from './../../../../../../services/excelServices/excel.service';
import { PedidoServices } from './../../../../../../services/serviciosCliente/pedidoServices/pedido.service';
import Swal from 'sweetalert2';
import { NgForm } from '@angular/forms';
import { Pedido } from '../../../../../../entidades/Pedido';
import { ClienteService } from '../../../../../../services/serviciosCliente/clienteServices/cliente.service';
import { Cliente } from '../../../../../../entidades/Cliente';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pedidos-por-cliente',
  templateUrl: './pedidos-por-cliente.component.html',
  styleUrls: ['./pedidos-por-cliente.component.css'],
})
export class PedidosPorClienteComponent implements OnInit {
  clientesEncontrados: Cliente[] = [];

  fechaAhora: Date = new Date();
  DateHasta: Date;
  DateDesde: Date;

  mostrar = false;

  idCliente: number;
  nombreCliente: string;

  pedidosRecuperadosDesdeHasta: Pedido[] = [];
  pageActual = 1;

  pedidoParaExcel: PedidoExcel = new PedidoExcel();
  listaPedidosParaExcel: PedidoExcel[] = [];

  filtroBuscador: any = '';

  constructor(
    private serviceCliente: ClienteService,
    private servicePedidos: PedidoServices,
    private excelService: ExcelService
  ) { }

  get filtrar(): Cliente[] {
    const matcher = new RegExp(this.filtroBuscador, 'i');
    return this.clientesEncontrados.filter((cliente) => {
      return matcher.test([cliente.nombre, cliente.apellido].join());
    });
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.serviceCliente.getAll().subscribe(
      (res) => {
        this.clientesEncontrados = res;
        console.log(res);
      },
      (err) => {
        Swal.fire({
          icon: 'error',
          title: 'Ocurrio un problema',
          html: 'Por favor vuelva a intentarlo mas tarde',
        });
        console.log(err);
      }
    );
  }

  recuperarID(clienteSeleccionado: Cliente) {
    this.mostrar = false;
    this.idCliente = clienteSeleccionado.id;
    this.nombreCliente =
      clienteSeleccionado.nombre + ' ' + clienteSeleccionado.apellido;
    this.pedidosRecuperadosDesdeHasta = [];
  }

  exportAsXLSX(): void {
    const totalPedido = this.pedidoParaExcel.totalPedido;

    // Casteo de pedido a pedidoExcel.
    // Esto es totalmente removible si lo casteamos apenas entra a el array pedidosRecuperadosDesdeHasta
    // Se ahorra 1 for each, 1 arreglo y una variable
    for (const key in this.pedidosRecuperadosDesdeHasta) {
      this.pedidoParaExcel = new PedidoExcel();
      this.pedidoParaExcel.numero = this.pedidosRecuperadosDesdeHasta[
        key
      ].numero;
      this.pedidoParaExcel.fechaRealizacion = this.pedidosRecuperadosDesdeHasta[
        key
      ].fechaRealizacion;
      this.pedidoParaExcel.hora_estimada_fin = this.pedidosRecuperadosDesdeHasta[
        key
      ].hora_estimada_fin;
      this.pedidoParaExcel.tipo_Envio = this.pedidosRecuperadosDesdeHasta[
        key
      ].tipo_Envio;
      this.pedidoParaExcel.totalPedido = this.pedidosRecuperadosDesdeHasta[
        key
      ].totalPedido;

      this.listaPedidosParaExcel.push(this.pedidoParaExcel);
    }

    this.pedidoParaExcel = new PedidoExcel();

    this.pedidoParaExcel.totalPedido = totalPedido;

    this.listaPedidosParaExcel.push(this.pedidoParaExcel);

    this.excelService.exportAsExcelFile(
      this.listaPedidosParaExcel,
      'Pedidos_por_cliente_' + this.nombreCliente
    );
  }

  onSubmit(form: NgForm) {
    if (form.controls.desdeday.value >= form.controls.hastaday.value) {
      Swal.fire({
        icon: 'error',
        title: 'La fecha son incorrectas',
        html: 'Por favor revise el orden de las fechas ingresadas',
      });
      this.mostrar = false;
    } else {
      this.pedidosRecuperadosDesdeHasta = [];
      this.servicePedidos
        .getPedidosEntreDosFechas(this.DateDesde, this.DateHasta)
        .subscribe(
          (res) => {
            if (res) {

              this.calcularRecaudacion(res);
              res.forEach((pedidoRecuperado) => {
                if (pedidoRecuperado.clientePedido.id === this.idCliente) {
                  this.pedidosRecuperadosDesdeHasta.push(pedidoRecuperado);
                }
              });
              this.mostrar = true;
            } else {
              this.mostrar = false;
              Swal.fire({
                icon: 'error',
                title: 'Cuidado',
                html: 'En la fecha seleccionada no se hicieron pedidos',
              });
            }
          },
          (err) => {
            this.mostrar = false;
            Swal.fire({
              icon: 'error',
              title: 'Error',
              html: 'Vuelva a intentarlo mas tarde',
            });
            console.error(err);
          },
          () => {
            if (this.pedidosRecuperadosDesdeHasta.length === 0) {
              this.mostrar = false;
              Swal.fire({
                icon: 'info',
                title: 'No hay pedidos',
                html: 'En la fecha seleccionada no se hicieron pedidos',
              });
            } else {
              return this.pedidosRecuperadosDesdeHasta;
            }
          }
        );
    }
  }

  calcularRecaudacion(listaDePedidos: Pedido[]) {
    this.pedidoParaExcel.totalPedido = 0;
    listaDePedidos.forEach((pedidoItem) => {
      this.pedidoParaExcel.totalPedido += pedidoItem.totalPedido;
    });
  }
}
