import { ExcelService } from './../../../../../../services/excelServices/excel.service';
import { ArticuloInsumo } from './../../../../../../entidades/ArticuloInsumo';
import { ArticuloInsumoService } from './../../../../../../services/serviciosCliente/articuloInsumoServices/articuloInsumo.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-art-stock-minimo',
  templateUrl: './art-stock-minimo.component.html',
  styleUrls: ['./art-stock-minimo.component.css'],
})
export class ArtStockMinimoComponent implements OnInit {
  articulosBajoStock: ArticuloInsumo[] = [];

  mostrar: boolean = false;

  constructor(
    private serviceArtInsumo: ArticuloInsumoService,
    private excelService: ExcelService
  ) {
    this.getArticulosBajoStock();
  }

  ngOnInit(): void {}

  getArticulosBajoStock() {
    this.esperarAlert();
    this.serviceArtInsumo.getAll().subscribe(
      (listaArticulosInsumo) => {
        listaArticulosInsumo.forEach((articuloInsumo) => {
          if (articuloInsumo.stock_actual <= articuloInsumo.stock_minimo) {
            this.articulosBajoStock.push(articuloInsumo);
            this.mostrar = true;
          }
        });
        Swal.fire({
          icon: 'success',
          title: 'Datos cargados',
          showConfirmButton: false,
          timer: 1200,
        });
        console.log(this.articulosBajoStock);
      },
      (err) => {
        Swal.fire({
          icon: 'error',
          title: 'Ocurrio un error al cargar el componente',
          html: 'Vuelva a intentarlo mas tarde',
        });
        console.error(err);
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

  exportAsXLSX(): void {
    this.excelService.exportAsExcelFile(
      this.articulosBajoStock,
      'Articulos con stock bajo'
    );
  }
}
