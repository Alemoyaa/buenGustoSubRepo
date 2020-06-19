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

  pedidosRecuperadosDesdeHasta: Pedido[] = [];

  constructor(private servicePedido: PedidoServices) {}

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
            this.pedidosRecuperadosDesdeHasta = res;
            this.getCantidades(this.pedidosRecuperadosDesdeHasta);
          },
          (err) => {
            console.log(err);
          }
        );
    }
  }

  getCantidades(listaDePedidos: Pedido[]) {
    let elementosSinRepetir: Array<string> = [];
    let cantidadElementos: Array<number> = [];

    listaDePedidos.forEach((pedidoItem) => {
      pedidoItem.lista_detallePedido.forEach((articuloDetallePedido) => {
        if (
          !elementosSinRepetir.includes(
            articuloDetallePedido.articulo.denominacion
          )
        ) {
          elementosSinRepetir.push(
            articuloDetallePedido.articulo.denominacion as string
          );
        }
      });
    });

    for (let x = 0; x < elementosSinRepetir.length; x++) {
      let cantidad = 0;

      listaDePedidos.forEach((pedido) => {
        for (let i = 0; i < pedido.lista_detallePedido.length; i++) {
          if (
            (pedido.lista_detallePedido[i].articulo.denominacion as string) ===
            elementosSinRepetir[x]
          ) {
            cantidad += pedido.lista_detallePedido[i].cantidad;
          }
        }
      });

      cantidadElementos.push(cantidad);
      cantidad = 0;
    }

    this.newChart('canvaFecha', elementosSinRepetir, cantidadElementos);
  }

  newChart(nombre, labels, data) {
    var ctx = document.getElementById(nombre);
    var myChart = new Chart(ctx, {
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
