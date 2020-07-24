import { PedidoExcel } from './../../../../../../services/excelServices/entidades/PedidoExcel';
import { ExcelService } from './../../../../../../services/excelServices/excel.service';
import { Pedido } from './../../../../../../entidades/Pedido';
import { PedidoServices } from './../../../../../../services/serviciosCliente/pedidoServices/pedido.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-recaudacion-tiempo',
  templateUrl: './recaudacion-tiempo.component.html',
  styleUrls: ['./recaudacion-tiempo.component.css'],
})
export class RecaudacionTiempoComponent implements OnInit {
  fechaAhora: Date = new Date();
  DateHasta: Date;
  DateDesde: Date;

  recaudacionTotal: number;
  mostrar: boolean = true;

  listaDePedidos: Pedido[];
  pedidoParaExcel: PedidoExcel = new PedidoExcel();
  listaPedidosParaExcel: PedidoExcel[] = [];

  constructor(
    private servicePedido: PedidoServices,
    private excelService: ExcelService
  ) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    if (form.controls['desdeday'].value >= form.controls['hastaday'].value) {
      Swal.fire({
        icon: 'error',
        title: 'La fecha son incorrectas',
        html: 'Por favor revise el orden de las fechas ingresadas',
      });
    } else {
      this.servicePedido
        .getPedidosEntreDosFechas(this.DateDesde, this.DateHasta)
        .subscribe(
          (res) => {
            this.calcularRecaudacion(res);
            this.listaDePedidos = res;
          },
          (err) => {
            Swal.fire({
              icon: 'error',
              title: 'Ocurrio un problema',
              html: 'Por favor vuelva a intentarlo mas tarde',
            });
            this.mostrar = false;
            console.log(err);
          }
        );
    }
  }

  calcularRecaudacion(listaDePedidos: Pedido[]) {
    this.recaudacionTotal = 0;

    listaDePedidos.forEach((pedidoItem) => {
      this.recaudacionTotal += pedidoItem.totalPedido;
      this.pedidoParaExcel.totalPedido = this.recaudacionTotal;
    });
  }

  exportAsXLSX(): void {
    let totalPedido = this.pedidoParaExcel.totalPedido;

    //Casteo de pedido a pedidoExcel.
    //Esto es totalmente removible si lo casteamos apenas entra a el array listaDePedidos
    //Se ahorra 1 for each, 1 arreglo y una variable
    for (const key in this.listaDePedidos) {
      this.pedidoParaExcel = new PedidoExcel();
      this.pedidoParaExcel.id = this.listaDePedidos[key].id;
      this.pedidoParaExcel.fechaRealizacion = this.listaDePedidos[
        key
      ].fechaRealizacion;
      this.pedidoParaExcel.hora_estimada_fin = this.listaDePedidos[
        key
      ].hora_estimada_fin;
      this.pedidoParaExcel.numero = this.listaDePedidos[key].numero;
      this.pedidoParaExcel.tipo_Envio = this.listaDePedidos[key].tipo_Envio;
      this.pedidoParaExcel.totalPedido = this.listaDePedidos[key].totalPedido;

      this.listaPedidosParaExcel.push(this.pedidoParaExcel);
    }

    this.pedidoParaExcel = new PedidoExcel();

    this.pedidoParaExcel.totalPedido = totalPedido;

    this.listaPedidosParaExcel.push(this.pedidoParaExcel);

    this.excelService.exportAsExcelFile(
      this.listaPedidosParaExcel,
      'Recaudacion por tiempo'
    );
  }
}
