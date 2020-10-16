import { ExcelService } from './../../../../../services/excelServices/excel.service';
import { Pedido } from './../../../../../entidades/Pedido';
import { PedidoServices } from './../../../../../services/serviciosCliente/pedidoServices/pedido.service';
import { Chart } from 'node_modules/chart.js';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.css'],
})
export class EstadisticasComponent implements OnInit {
  fechaAhora: Date = new Date();
  DateHasta: Date;
  DateDesde: Date;

  myChart: any;

  mostrarExcel: boolean = false;

  elementosSinRepetir: Array<string> = [];
  cantidadElementos: Array<number> = [];

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
            if (this.myChart) {
              this.myChart.destroy();
            }
            if (res) {
              this.elementosSinRepetir = [];
              this.cantidadElementos = [];
              this.getCantidades(res);
            } else {
              this.mostrarExcel = false;
              Swal.fire({
                icon: 'info',
                title: 'No articulos en esa fecha',
                html: 'Por favor ingrese otra fecha',
              });
            }
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
  }

  getCantidades(listaDePedidos: Pedido[]) {

    listaDePedidos.forEach((pedidoItem) => {
      pedidoItem.lista_detallePedido.forEach((articuloDetallePedido) => {
        if (articuloDetallePedido.articuloInsumo) {
          if (
            !this.elementosSinRepetir.includes(
              articuloDetallePedido.articuloInsumo.denominacion
            )
          ) {
            this.elementosSinRepetir.push(
              articuloDetallePedido.articuloInsumo.denominacion as string
            );
          }
        } else {
          if (
            !this.elementosSinRepetir.includes(
              articuloDetallePedido.articuloManufacturado.denominacion
            )
          ) {
            this.elementosSinRepetir.push(
              articuloDetallePedido.articuloManufacturado.denominacion as string
            );
          }
        }
      });
    });

    this.elementosSinRepetir.forEach((elemento) => {
      let cantidad = 0;

      listaDePedidos.forEach((pedido) => {
        pedido.lista_detallePedido.forEach((ItemDetallePedido) => {
          if (ItemDetallePedido.articuloInsumo) {
            if (
              (ItemDetallePedido.articuloInsumo.denominacion as string) ===
              elemento
            ) {
              cantidad += ItemDetallePedido.cantidad;
            }
          } else {
            if (
              (ItemDetallePedido.articuloManufacturado
                .denominacion as string) === elemento
            ) {
              cantidad += ItemDetallePedido.cantidad;
            }
          }
        });
      });

      this.mostrarExcel = true;
      this.cantidadElementos.push(cantidad);
      cantidad = 0;
    });

    this.newChart(
      'canvaFecha',
      this.elementosSinRepetir,
      this.cantidadElementos
    );
  }

  exportAsXLSX(): void {
    let array = [];

    for (let index = 0; index < this.elementosSinRepetir.length; index++) {
      let objAExcel = {
        nombre_articulo: this.elementosSinRepetir[index],
        cantidad_vendida: this.cantidadElementos[index],
      };

      array.push(objAExcel);
    }

    this.excelService.exportAsExcelFile(array, 'Ranking_comidas_');
  }

  newChart(nombre, labels, data) {
    var ctx = document.getElementById(nombre);
    this.myChart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: labels,
        datasets: [
          {
            label: '#',
            data: data,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    });
  }
}
