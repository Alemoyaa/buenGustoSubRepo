import Swal from 'sweetalert2';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
    private unidadMedidaService: UnidadMedidaService) {
  }

  async ngOnInit() {
    await this.getAllArticulos();
    await this.crearFormulario();
  }

  /* Formularios */
  crearFormulario(): void {
    this.formStock = new FormGroup({
      id: new FormControl(0),
      denominacion: new FormControl('', Validators.required),
      precio_de_venta: new FormControl(0, Validators.required),
      precio_de_compra: new FormControl(0, Validators.required),
      stock_actual: new FormControl(0, Validators.required),
      stock_minimo: new FormControl(0, Validators.required),
      stock_maximo: new FormControl(0, Validators.required),
      requiere_refrigeracion: new FormControl(null, Validators.required),
      es_catalogo: new FormControl(null, Validators.required),
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

  editar(articulo: ArticuloInsumo) {
    console.log("formulario editar");
    console.log(articulo);
    this.esEditar = true;
    this.formStock.patchValue({
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
      unidadMedidaID: ({
        id: articulo.unidadMedidaID.id,
      }),
      categoria: ({
        id: articulo.categoria.id,
      })
    });
    this.id = articulo.id;
  }

  /* Servicios */

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

  update() {
    console.log("servicio update")
    console.log(this.formStock.value)
    this.artInsumoService.put(this.formStock.value.id, this.formStock.value).subscribe(
      (data) => {
        console.log("Entro");
        this.articulosInsumos.filter(item => {
          if (item.id === this.formStock.value.id) {
            const indexArticulo = this.articulosInsumos.indexOf(item);
            this.articulosInsumos.splice(indexArticulo, 1, data)
          }
        })
        console.log('data:', data);
        this.getAllArticulos();
        this.esEditar = false;
        this.formStock.reset();
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

  /* Metodos Propios */
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

  async getCategorias() {
    this.categorias.forEach((e) => {
      if (e.padre != null) {
        this.categoriasHijo.push(e);
      } else {
        this.categoriasPadre.push(e);
      }
    });
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

  limpiarForm() {
    this.crearFormulario();
  }

  cerrar() {
    this.esEditar = false;
  }

  /* Mejora el rendimiento de la tabla */
  trackByFn(index: number, i: ArticuloInsumo): number {
    return i.id;
  }

  /* Buscador */
  get filtrar(): ArticuloInsumo[] {
    const matcher = new RegExp(this.filtroBuscador, 'i');
    return this.articulosInsumos.filter((articulo) => {
      return matcher.test([articulo.denominacion, articulo.categoria].join());
    });
  }
}
