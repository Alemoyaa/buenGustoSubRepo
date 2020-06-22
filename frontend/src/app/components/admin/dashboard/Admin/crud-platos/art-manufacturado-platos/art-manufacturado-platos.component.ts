import { Component, OnInit } from '@angular/core';
import {ArticuloManufacturado} from '../../../../../../entidades/ArticuloManufacturado';
import {ArticuloManufacturadoService} from '../../../../../../services/serviciosCliente/articuloManufacturadoServices/articuloManufacturado.service';
import {AlertsService} from '../../../../../../services/alertServices/alerts.service';

@Component({
  selector: 'app-art-manufacturado-platos',
  templateUrl: './art-manufacturado-platos.component.html',
  styleUrls: ['./art-manufacturado-platos.component.css']
})
export class ArtManufacturadoPlatosComponent implements OnInit {

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

  preCargarDatosFormulario(articulo: ArticuloManufacturado) {
    this.articuloActualizar = articulo;
    this.esEditar = true;
  }

  eliminar(id: number) {
    const opcion = confirm('¿Esta seguro que desea eliminar?');
    if (opcion) {
      this.serviceArtManufac.delete(id).subscribe((data) => {
        alert('Registro eliminado');
      });
    } else {
    }
  }

  cerrar() {
    this.articuloActualizar = null;
    this.esEditar = false;
  }

}
