import { Pedido } from './../../../../../entidades/Pedido';
import { PedidoServices } from './../../../../../services/serviciosCliente/pedidoServices/pedido.service';
import { ArticuloInsumo } from 'src/app/entidades/ArticuloInsumo';
import { ArticuloInsumoService } from './../../../../../services/serviciosCliente/articuloInsumoServices/articuloInsumo.service';
import { Chart } from 'node_modules/chart.js';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Form, FormGroup, NgForm } from '@angular/forms';

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

  constructor(private servicePedido: PedidoServices) {
    // this.getArticulosBajoStock();
  }

  ngOnInit(): void {
    // this.newChart('general', ['pizzas', 'coso'], [2, 2]);
    // this.newChart('pizzas', ['4q', 'mozza'], [3, 4]);
    // this.newChart('bebidas', ['coca', 'sprite'], [3, 4]);
  }

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
            console.log(res);
            this.pedidosRecuperadosDesdeHasta = res;
          },
          (err) => {
            console.log(err);
          }
        );
    }
  }

  // getArticulosBajoStock() {
  //   this.esperarAlert();
  //   this.serviceArtInsumo.getAll().subscribe(
  //     (listaArticulosInsumo) => {
  //       listaArticulosInsumo.forEach((articuloInsumo) => {
  //         if (articuloInsumo.stock_actual <= articuloInsumo.stock_minimo) {
  //           this.articulosBajoStock.push(articuloInsumo);
  //         }
  //       });
  //       Swal.fire({
  //         icon: 'success',
  //         title: 'Datos cargados',
  //         showConfirmButton: false,
  //         timer: 1200,
  //       });
  //       console.log(this.articulosBajoStock);
  //     },
  //     (err) => {
  //       Swal.fire({
  //         icon: 'error',
  //         title: 'Ocurrio un error al cargar el componente',
  //         html: 'Vuelva a intentarlo mas tarde',
  //       });
  //       console.error(err);
  //     }
  //   );
  // }

  // esperarAlert() {
  //   Swal.fire({
  //     title: 'Por favor espere',
  //     html: 'Recuperando los datos...',
  //     // timer: 1500,
  //     onBeforeOpen: () => {
  //       Swal.showLoading();
  //     },
  //   }).then((result) => {
  //     console.log(result);
  //   });
  // }

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
