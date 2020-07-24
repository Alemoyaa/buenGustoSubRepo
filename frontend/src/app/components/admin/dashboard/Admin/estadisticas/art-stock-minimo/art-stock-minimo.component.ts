import { ExcelService } from './../../../../../../services/excelServices/excel.service';
import { ArticuloInsumo } from './../../../../../../entidades/ArticuloInsumo';
import { ArticuloInsumoService } from './../../../../../../services/serviciosCliente/articuloInsumoServices/articuloInsumo.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { ArticuloInsumoExcel } from 'src/app/services/excelServices/entidades/ArticuloInsumoExcel';

@Component({
  selector: 'app-art-stock-minimo',
  templateUrl: './art-stock-minimo.component.html',
  styleUrls: ['./art-stock-minimo.component.css'],
})
export class ArtStockMinimoComponent implements OnInit {
  articulosBajoStock: ArticuloInsumo[] = [];
  articulosInsumoAExcel: ArticuloInsumoExcel[] = [];
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
    //Casteo de articulo insumo a insumoExcel.
    //Esto es totalmente removible si lo casteamos apenas entra a el array articulosBajoStock
    //Se ahorra 1 for each, 1 arreglo y una variable
    for (const key in this.articulosBajoStock) {
      let articuloTemp = new ArticuloInsumoExcel();
      articuloTemp.id = this.articulosBajoStock[key].id;
      articuloTemp.denominacion = this.articulosBajoStock[key].denominacion;
      articuloTemp.es_catalogo = this.articulosBajoStock[key].es_catalogo;
      articuloTemp.precio_de_compra = this.articulosBajoStock[
        key
      ].precio_de_compra;
      articuloTemp.precio_de_venta = this.articulosBajoStock[
        key
      ].precio_de_venta;
      articuloTemp.requiere_refrigeracion = this.articulosBajoStock[
        key
      ].requiere_refrigeracion;
      articuloTemp.stock_actual = this.articulosBajoStock[key].stock_actual;
      articuloTemp.stock_maximo = this.articulosBajoStock[key].stock_maximo;
      articuloTemp.stock_minimo = this.articulosBajoStock[key].stock_minimo;

      this.articulosInsumoAExcel.push(articuloTemp);
    }

    this.excelService.exportAsExcelFile(
      this.articulosInsumoAExcel,
      'Articulos con stock bajo'
    );
  }
}
