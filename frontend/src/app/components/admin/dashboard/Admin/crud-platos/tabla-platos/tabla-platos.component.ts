import { Articulo } from 'src/app/entidades/Articulo';
import { AlertsService } from './../../../../../../services/alertServices/alerts.service';
import { ArticuloManufacturadoService } from './../../../../../../services/serviciosCliente/articuloManufacturadoServices/articuloManufacturado.service';
import { ArticuloManufacturado } from './../../../../../../entidades/ArticuloManufacturado';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabla-platos',
  templateUrl: './tabla-platos.component.html',
  styleUrls: ['./tabla-platos.component.css'],
})
export class TablaPlatosComponent implements OnInit {
  esEditar: boolean = false;
  articuloManufacturado: ArticuloManufacturado[] = [];

  // articuloDetalle: ArticuloManufacturado[] = [];
  articuloActualizar: ArticuloManufacturado;

  pageActual: number = 1;

  constructor(
    private serviceArtManufac: ArticuloManufacturadoService,
    private sweet: AlertsService
  ) {}

  ngOnInit(): void {
    this.getAllArtManufac();
  }

  getAllArtManufac() {
    this.serviceArtManufac.getAll().subscribe(
      (respuesta) => {
        this.articuloManufacturado = respuesta;
        console.log(this.articuloManufacturado);
      },
      (err) => {
        this.sweet.mensajeError(
          'Ocurrio un error',
          'Vuelva a intentarlo mas tarde'
        );
        console.log(err);
      }
    );
  }

  editar(articulo: ArticuloManufacturado) {
    this.articuloActualizar = articulo;
    this.esEditar = true;
  }

  cerrar() {
    this.articuloActualizar = null;
    this.esEditar = false;
  }
}
