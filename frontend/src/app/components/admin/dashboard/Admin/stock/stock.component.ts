import Swal from 'sweetalert2';
import { FormControl, FormGroup } from '@angular/forms';
import { ArticuloInsumoService } from './../../../../../services/serviciosCliente/articuloInsumoServices/articuloInsumo.service';
import { ArticuloInsumo } from 'src/app/entidades/ArticuloInsumo';
import { Component, OnInit } from '@angular/core';
import { CategoriaService } from 'src/app/services/serviciosCliente/categoriaServices/categoria.service';
import { Categoria } from 'src/app/entidades/Categoria';
import { UnidadMedidaService } from 'src/app/services/serviciosCliente/unidadMedidaServices/unidad_medida.services';
import { UnidadMedida } from '../../../../../entidades/UnidadMedida';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css'],
})
export class StockComponent implements OnInit {
  pageActual: number = 1; // paginacion
  filtroBuscador: any = '';
  public articuloInsumoActual: ArticuloInsumo; // Para editar

  public articulosInsumos: ArticuloInsumo[] = [];
  categoriaSeleccionada: any;
  unidadSeleccionada: any;
  public unidadesMedida: Array<UnidadMedida> = [];
  public categorias: Array<Categoria> = [];
  public categoriasHijo: Array<Categoria> = [];
  public categoriasPadre: Array<Categoria> = [];
  public categoriasPadreHijo: Array<any> = [];
  id: number;
  public formStock: FormGroup;
  public articulo: ArticuloInsumo;
  esEditar: boolean = false;

  constructor(
    private artInsumoService: ArticuloInsumoService,
    private categoriaService: CategoriaService,
    private unidadMedidaService: UnidadMedidaService
  ) {
  }

  // buscador
  get filtrar(): ArticuloInsumo[] {
    const matcher = new RegExp(this.filtroBuscador, 'i');
    return this.articulosInsumos.filter((articulo) => {
      return matcher.test([articulo.denominacion, articulo.categoria].join());
    });
  }

  async ngOnInit() {
    await this.getAllArticulos();
    await this.crearFormulario();
  }

  /* Método que construye nuestro formulario */
  crearFormulario(): void {
    this.formStock = new FormGroup({
      id: new FormControl(0),
      denominacion: new FormControl(null),
      precio_de_venta: new FormControl(0),
      precio_de_compra: new FormControl(0),
      stock_actual: new FormControl(0),
      stock_minimo: new FormControl(0),
      stock_maximo: new FormControl(0),
      requiere_refrigeracion: new FormControl(null),
      es_catalogo: new FormControl(null),
      url_imagen: new FormControl(null),
      unidadMedidaID: new FormGroup({
        id: new FormControl(0),
        denominacion: new FormControl(null),
        abreviatura: new FormControl(null),
        paraRecetas: new FormControl(null),
        equivalencia_KgOL: new FormControl(0),
      }),
      categoria: new FormGroup({
        id: new FormControl(0),
        nombreCategoria: new FormControl(null),
        esCategoriaCatalogo: new FormControl(0),
        padre: new FormControl(null),
      }),
    });
  }


  limpiarForm() {
    this.crearFormulario();
  }

  getAllArticulos() {
    this.artInsumoService.getAll().subscribe(
      (res) => {
        this.articulosInsumos = res;
        console.log(this.articulosInsumos);
      },
      (error) => {
        console.warn('error =>  ', error);
      }
    );
    this.getAllCategorias();
    this.getUnidades();
  }



  getAllCategorias() {
    this.categoriaService.getAll().subscribe(
      (categorias) => {
        this.categorias = categorias;
      },
      (error) => {
        console.warn('error =>  ', error);
      }
    );
  }


  getUnidades() {
    this.unidadMedidaService.getAll().subscribe(
      (unidad) => {
        this.unidadesMedida = unidad;
      },
      (error) => {
        console.warn('error =>  ', error);
      }
    );
  }

  seleccionarUnidad(id: number) {
    const control = this.formStock.controls.unidadMedidaID as FormGroup;
    if (id != null) {

      this.unidadMedidaService.getOne(id).subscribe((unidad) => {
        this.unidadSeleccionada = unidad;

        this.formStock.controls.unidadMedidaID.setValue({
          id: unidad.id,
          denominacion: unidad.denominacion,
          abreviatura: unidad.abreviatura,
          paraRecetas: unidad.paraRecetas,
          equivalencia_KgOL: unidad.equivalencia_KgOL,
        });
      });
    }
  }




  async getCategorias() {
    this.categorias.forEach((e) => {
      if (e.padre != null) {
        this.categoriasHijo.push(e);
      } else {
        this.categoriasPadre.push(e);
      }
    });
  }

  seleccionarPadre(id: number) {
    console.log(id);

    const control = <FormGroup>this.formStock.controls['categoria'];

    if (id != null) {

      this.categoriaService.getOne(id).subscribe((padre) => {
        this.categoriaSeleccionada = padre;

        this.formStock.controls.categoria.setValue({
          id: this.categoriaSeleccionada.id,
          nombreCategoria: this.categoriaSeleccionada.nombreCategoria,
          esCategoriaCatalogo: this.categoriaSeleccionada.esCategoriaCatalogo,
          padre: this.categoriaSeleccionada.padre,
        });
      });
    } else {
      console.warn("No se pudo seleccionar categoria")
    }
  }

  // Post
  agregar() {

    this.artInsumoService.post(this.formStock.value).subscribe(
      (data) => {
        this.articulo = data;
        this.articulosInsumos.push(this.articulo);
        this.getAllArticulos();
        this.formStock.reset();
        Swal.fire('success', 'Articulo agregado ', 'success');
      },
      (error) => {
        console.warn('error =>  ', error);
      }
    );
  }

  delete(articulo: ArticuloInsumo) {
    Swal.fire({
      title: 'Estas seguro?',
      text: 'No podrás revertir esto!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar articulo!',
    }).then((result) => {
      if (result.value) {
        this.artInsumoService.delete(articulo.id).subscribe(
          (res) => {
            const indexArticulo = this.articulosInsumos.indexOf(articulo);
            this.articulosInsumos.splice(indexArticulo, 1);
            Swal.fire('Deleted!', 'Articulo eliminado con éxito', 'success');
          },
          (error) => {
            console.warn('error =>  ', error);
          }
        );
      }
    });
  }

  update() {
    this.artInsumoService.put(this.id, this.formStock.value).subscribe(
      (data) => {
        console.log('data:', data);
        this.getAllArticulos();
        this.esEditar = false;
        this.formStock.reset(); // Que me limpie los campos
      },
      (error) => {
        console.warn('error =>  ', error);
      }
    );
  }

  // form editar
  editar(articulo: ArticuloInsumo) {
    console.log(articulo);
    this.esEditar = true;
    this.formStock.setValue({
      id: articulo.id,
      denominacion: articulo.denominacion,
      es_catalogo: articulo.es_catalogo,
      precio_de_compra: articulo.precio_de_compra,
      precio_de_venta: articulo.precio_de_venta,
      requiere_refrigeracion: articulo.requiere_refrigeracion,
      stock_actual: articulo.stock_actual,
      stock_maximo: articulo.stock_maximo,
      stock_minimo: articulo.stock_minimo,
      url_imagen: articulo.url_imagen,
      unidadMedidaID: articulo.unidadMedidaID,
      categoria: articulo.categoria,
    });
    this.id = articulo.id;
    console.log(this.id);
  }

  cerrar() {
    this.esEditar = false;
  }

  // trackBy Mejora el rendimiento
  trackByFn(index: number, i: ArticuloInsumo): number {
    return i.id;
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
}
