import Swal from 'sweetalert2';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ArticuloInsumoService } from './../../../../../services/serviciosCliente/articuloInsumoServices/articuloInsumo.service';
import { ArticuloInsumo } from 'src/app/entidades/ArticuloInsumo';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {
  pageActual: number = 1;//paginacion

  public articulosInsumos: ArticuloInsumo[];
  id: number;
  public formStock: FormGroup;

  public articulo: ArticuloInsumo = {
    costo_de_venta: null,
    requiere_refrigeracion: null,
    stock_actual: null,
    stock_minimo: null,
    unidadMedidaID: null,
    id: null,
    precio_de_venta: null,
    url_imagen: '',
    es_catalogo: null,
    denominacion: '',
    categoria: null
  }

  public articuloInsumoActual: ArticuloInsumo; //Para editar


  esEditar: boolean = false;
  constructor(private artInsumoService: ArticuloInsumoService) { }

  ngOnInit(): void {
    this.getAllArticulos();
    this.crearFormulario();
  }

  /* Método que construye nuestro formulario */
  crearFormulario(): void {
    this.formStock = new FormGroup({
      costo_de_venta: new FormControl(null),
      requiere_refrigeracion: new FormControl(null),
      stock_actual: new FormControl(null),
      stock_minimo: new FormControl(null),
      unidadMedidaID: new FormControl(null),
      id: new FormControl(null),
      precio_de_venta: new FormControl(null),
      url_imagen: new FormControl(''),
      es_catalogo: new FormControl(null),
      denominacion: new FormControl(''),
      categoria: new FormControl(null),
    });
  }

  getAllArticulos() {
    this.artInsumoService.getAll().subscribe(
      (res) => {
        this.articulosInsumos = res;
        console.log(this.articulosInsumos);
      }, (err) => {
        Swal.fire({
          icon: 'error',
          title: 'Ocurrio un problema',
          html: 'No hay articulos para mostrar',
        });
        console.log(err);
      }
    );
  }

  //Post
  agregar() {
    this.artInsumoService.post(this.formStock.value).subscribe(
      (data) => {
        this.articulo = data;
        this.articulosInsumos.push(this.articulo);
        this.getAllArticulos();
        this.formStock.reset();
        console.log(this.articulosInsumos);
        console.log(this.articulo);
        Swal.fire(
          'success',
          'Articulo agregado ',
          'success'
        )
      }, (err) => {
        Swal.fire({
          icon: 'error',
          title: 'Ocurrio un problema',
          html: 'Por favor vuelva a intentarlo mas tarde',
        });
        console.log(err);
      }

    );
  }

  delete(articulo: ArticuloInsumo) {
    Swal.fire({
      title: 'Estas seguro?',
      text: " No podrás revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar Usuario!'
    }).then((result) => {
      if (result.value) {
        this.artInsumoService.delete(articulo.id).subscribe(
          (res) => {
            console.log(articulo.id);
            const indexArticulo = this.articulosInsumos.indexOf(articulo);
            this.articulosInsumos.splice(indexArticulo, 1);

            Swal.fire(
              'Deleted!',
              'El Usuario fue eliminado con éxito',
              'success'
            )
          }, (err) => {
            Swal.fire({
              icon: 'error',
              title: 'Ocurrio un problema',
              html: 'Por favor vuelva a intentarlo mas tarde',
            });
            console.log(err);
          }
        );
      }
    })
  }

  update() {
    this.artInsumoService.put(this.id, this.formStock.value).subscribe(
      (data) => {
        console.log(this.id)
        this.getAllArticulos();
        this.esEditar = false;
        this.formStock.reset(); //Que me limpie los campos
      }, (err) => {
        Swal.fire({
          icon: 'error',
          title: 'Ocurrio un problema',
          html: 'Por favor vuelva a intentarlo mas tarde',
        });
        console.log(err);
      }
    );
  }

  //form editar
  editar(articulo: ArticuloInsumo) {
    console.log(articulo)
    this.esEditar = true;
    this.formStock.setValue({
      costo_de_venta: articulo.costo_de_venta,
      requiere_refrigeracion: articulo.requiere_refrigeracion,
      stock_actual: articulo.stock_actual,
      stock_minimo: articulo.stock_minimo,
      unidadMedidaID: articulo.unidadMedidaID,
      id: articulo.id,
      precio_de_venta: articulo.precio_de_venta,
      url_imagen: articulo.url_imagen,
      es_catalogo: articulo.es_catalogo,
      denominacion: articulo.denominacion,
      categoria: articulo.categoria
    });
    this.id = articulo.id;
    console.log(this.id)
  }

  cerrar() {
    this.esEditar = false;
  }

  //trackBy Mejora el rendimiento
  trackByFn(index: number, i: ArticuloInsumo): number {
    return i.id;
  }

}
