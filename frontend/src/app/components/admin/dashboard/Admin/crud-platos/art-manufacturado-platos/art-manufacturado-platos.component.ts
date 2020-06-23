import Swal from 'sweetalert2';
import { Categoria } from 'src/app/entidades/Categoria';
import { Component, OnInit } from '@angular/core';
import { ArticuloManufacturado } from '../../../../../../entidades/ArticuloManufacturado';
import { ArticuloManufacturadoService } from '../../../../../../services/serviciosCliente/articuloManufacturadoServices/articuloManufacturado.service';
import { AlertsService } from '../../../../../../services/alertServices/alerts.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-art-manufacturado-platos',
  templateUrl: './art-manufacturado-platos.component.html',
  styleUrls: ['./art-manufacturado-platos.component.css'],
})
export class ArtManufacturadoPlatosComponent implements OnInit {
  formularioArticulo: FormGroup;
  articuloManufacturado: ArticuloManufacturado[] = [];
  articuloActualizar: ArticuloManufacturado;

  pageActual: number = 1;

  filtroBuscador: any = '';
  id: number;

  esEditar: boolean = false;
  constructor(
    private fb: FormBuilder,
    private alerts: AlertsService,
    private serviceArtManufac: ArticuloManufacturadoService,
    private sweet: AlertsService
  ) {}

  ngOnInit() {
    this.getAllArtManufac();
    this.crearFormulario();
  }

  get filtrar(): ArticuloManufacturado[] {
    var matcher = new RegExp(this.filtroBuscador, 'i');
    return this.articuloManufacturado.filter(function (articulo) {
      return matcher.test([articulo.denominacion, articulo.categoria].join());
    });
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

  crearFormulario() {
    this.formularioArticulo = new FormGroup({
      id: new FormControl(null),
      precio_de_venta: new FormControl(null),
      url_imagen: new FormControl(null),
      denominacion: new FormControl(null),
      categoria: new FormControl(null),
      es_catalogo: new FormControl(null),
      costo_de_manuf: new FormControl(null),
      tiempo_estimado_manuf: new FormControl(null),
      lista_detalleManufacturado: new FormControl(null),
    });
  }

  actualizar() {
    this.serviceArtManufac
      .put(this.id, this.formularioArticulo.value)
      .subscribe(
        (res) => {
          this.alerts.mensajeSuccess(
            'Actualizacion realizada',
            `El articulo ${this.articuloActualizar.denominacion} se actualizo correctamente, recuerde que puede modificarlo cuando usted lo desee`
          );
          console.log(this.id);
          this.getAllArtManufac();
          this.esEditar = false;
          this.formularioArticulo.reset();
        },
        (err) => {
          this.alerts.mensajeError(
            'No se ah podido actualizar el Rol del usuario',
            'ah ocurrido un error y no se ah podido realizar la actualizacio, porfavor verifique que esten todos los datos correctos'
          );
        }
      );
  }

  eliminar(articulo: ArticuloManufacturado) {
    const opcion = confirm('¿Esta seguro que desea eliminar?');
    if (opcion) {
      this.serviceArtManufac.delete(articulo.id).subscribe(
        (data) => {
          console.log(data);
          const indexArticulo = this.articuloManufacturado.indexOf(articulo);
          this.articuloManufacturado.splice(indexArticulo, 1);
          this.sweet.mensajeSuccess('Eliminacion exitosa', '');
        },
        (error) => {
          console.error(error);
          this.sweet.mensajeError(
            'Error',
            'Hubo un problema al eliminar el articulo'
          );
        }
      );
    }
  }

  crear() {
    this.serviceArtManufac.post(this.formularioArticulo.value).subscribe(
      (data) => {
        this.articuloActualizar = data;
        this.articuloManufacturado.push(this.articuloActualizar);
        this.getAllArtManufac();
        this.formularioArticulo.reset();
        Swal.fire('success', 'Articulo agregado ', 'success');
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

  editar(articulo: ArticuloManufacturado) {
    console.log(articulo);
    this.esEditar = true;
    this.formularioArticulo.setValue({
      id: articulo.id,
      precio_de_venta: articulo.precio_de_venta,
      url_imagen: articulo.url_imagen,
      denominacion: articulo.denominacion,
      categoria: articulo.categoria,
      es_catalogo: articulo.es_catalogo,
      costo_de_manuf: articulo.costo_de_manuf,
      tiempo_estimado_manuf: articulo.tiempo_estimado_manuf,
      lista_detalleManufacturado: articulo.lista_detalleManufacturado,
    });
    this.id = articulo.id;
    console.log(this.id);
  }

  cerrar() {
    this.crearFormulario()
    this.esEditar = false;
  }
}
