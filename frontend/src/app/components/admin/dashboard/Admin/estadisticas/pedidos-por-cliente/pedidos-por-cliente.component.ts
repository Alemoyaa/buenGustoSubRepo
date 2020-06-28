import { ExcelService } from './../../../../../../services/excelServices/excel.service';
import { PedidoServices } from './../../../../../../services/serviciosCliente/pedidoServices/pedido.service';
import Swal from 'sweetalert2';
import { NgForm } from '@angular/forms';
import { Pedido } from './../../../../../../entidades/Pedido';
import { ClienteService } from './../../../../../../services/serviciosCliente/clienteServices/cliente.service';
import { Cliente } from './../../../../../../entidades/Cliente';
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

  mostrar: boolean = false;

  idCliente: number;
  nombreCliente: string;

  pedidosRecuperadosDesdeHasta: Pedido[] = [];
  pageActual: number = 1;

  filtroBuscador: any = '';

  constructor(
    private serviceCliente: ClienteService,
    private servicePedidos: PedidoServices,
    private excelService: ExcelService
  ) {}

  ngOnInit(): void {
    this.getAll();
  }

  get filtrar(): Cliente[] {
    var matcher = new RegExp(this.filtroBuscador, 'i');
    return this.clientesEncontrados.filter(function (cliente) {
      return matcher.test([cliente.nombre, cliente.apellido].join());
    });
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
    this.idCliente = clienteSeleccionado.id;
    this.nombreCliente =
      clienteSeleccionado.nombre + ' ' + clienteSeleccionado.apellido;
    this.pedidosRecuperadosDesdeHasta = [];
  }

  exportAsXLSX(): void {
    this.excelService.exportAsExcelFile(
      this.pedidosRecuperadosDesdeHasta,
      'Pedidos por cliente: ' + this.nombreCliente
    );
  }

  onSubmit(form: NgForm) {
    if (form.controls['desdeday'].value >= form.controls['hastaday'].value) {
      Swal.fire({
        icon: 'error',
        title: 'La fecha son incorrectas',
        html: 'Por favor revise el orden de las fechas ingresadas',
      });
    } else {
      this.pedidosRecuperadosDesdeHasta = [];
      this.servicePedidos
        .getPedidosEntreDosFechas(this.DateDesde, this.DateHasta)
        .subscribe(
          (res) => {
            if (res) {
              res.forEach((pedidoRecuperado) => {
                if (pedidoRecuperado.ClientePedido.id === this.idCliente) {
                  this.pedidosRecuperadosDesdeHasta.push(pedidoRecuperado);
                }
              });
              this.mostrar = true;
            } else {
              Swal.fire({
                icon: 'error',
                title: 'Cuidado',
                html: 'En la fecha seleccionada no se hicieron pedidos',
              });
            }
          },
          (err) => {
            Swal.fire({
              icon: 'error',
              title: 'Error',
              html: 'Vuelva a intentarlo mas tarde',
            });
            console.error(err);
          },
          () => {
            if (this.pedidosRecuperadosDesdeHasta.length === 0) {
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
}
