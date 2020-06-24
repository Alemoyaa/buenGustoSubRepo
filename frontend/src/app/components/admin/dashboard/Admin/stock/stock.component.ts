import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import Swal from 'sweetalert2';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { ArticuloInsumoService } from './../../../../../services/serviciosCliente/articuloInsumoServices/articuloInsumo.service';
import { ArticuloInsumo } from 'src/app/entidades/ArticuloInsumo';
import { Component, OnInit } from '@angular/core';
import { CategoriaService } from 'src/app/services/serviciosCliente/categoriaServices/categoria.service';
import { Categoria } from 'src/app/entidades/Categoria';
import { UnidadMedidaService } from 'src/app/services/serviciosCliente/unidadMedidaServices/unidad_medida.services';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css'],
})
export class StockComponent implements OnInit {
  pageActual: number = 1; //paginacion

  public articulosInsumos: ArticuloInsumo[] = [];

  categoriaSeleccionada: any;

  unidadSeleccionada: any;

  public unidadesMedida: Array<any> = [];
  public categorias: Array<Categoria> = [];
  public categoriasHijo: Array<Categoria> = [];
  public categoriasPadre: Array<Categoria> = [];
  public categoriasPadreHijo: Array<any> = [];

  filtroBuscador: any = '';
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
    categoria: null,
  };

  public articuloInsumoActual: ArticuloInsumo; //Para editar

  esEditar: boolean = false;
  constructor(
    private artInsumoService: ArticuloInsumoService,
    private categoriaService: CategoriaService,
    private unidadMedidaService: UnidadMedidaService
  ) { }

  async ngOnInit() {
    await this.getAllArticulos();
    await this.crearFormulario();
  }

  /* Método que construye nuestro formulario */
  crearFormulario(): void {
    this.formStock = new FormGroup({
      costo_de_venta: new FormControl(null),
      requiere_refrigeracion: new FormControl(null),
      stock_actual: new FormControl(null),
      stock_minimo: new FormControl(null),

      unidadMedidaID: new FormGroup({
        id: new FormControl(0),
        denominacion: new FormControl(''),
        abreviatura: new FormControl(''),
      }),
      id: new FormControl(0),
      precio_de_venta: new FormControl(null),
      url_imagen: new FormControl(''),
      es_catalogo: new FormControl(null),
      denominacion: new FormControl(''),
      categoria: new FormControl(null),
    });
  }

  //buscador
  get filtrar(): ArticuloInsumo[] {
    var matcher = new RegExp(this.filtroBuscador, 'i');
    return this.articulosInsumos.filter(function (articulo) {
      return matcher.test([articulo.denominacion, articulo.categoria].join());

    });
  }

  getAllArticulos() {
    this.artInsumoService.getAll().subscribe(
      (res) => {
        this.articulosInsumos = res;
        console.log(this.articulosInsumos);
      }
    );
    this.getAllCategorias();
    this.getUnidades();
  }


  getAllCategorias() {
    this.categoriaService.getAll().subscribe(
      async (categorias) => {
        this.categorias = categorias;
        console.log('Categorias todas:,', this.categorias);
        await this.getCategorias();
      },
      (error) => {

        console.warn("error =>  ", error);
      }
    );
  }



  //Me trae las unidades de medida
  async getUnidades() {
    await this.unidadMedidaService.getAll().subscribe(
      (unidad) => {
        this.unidadesMedida = unidad;
        console.log('Unidades: ', this.unidadesMedida);
      },(error) => {

        console.warn("error =>  ", error);
      }
    );
  }


  seleccionarUnidad(id: number){
    console.log(id);
    //  selecciono el rol en el formulario, traigo el rol seleccionado y lo seteo a mi usuario
    const control = <FormGroup>this.formStock.controls['unidadMedidaID'];
    // verifico q no me envie un null
    if (id != null) {
      // traigo el rol utilizando el id que me envian por formulario
      this.unidadMedidaService.getOne(id).subscribe((unidad) => {

        this.unidadSeleccionada = unidad;
        console.log(unidad)
        // seteo el formulario con el rol id y el nombre del rol traido
        this.formStock.controls.unidadMedidaID.setValue({
          id: unidad.id,
          denominacion: unidad.denominacion,
          abreviatura: unidad.abreviatura
        });

      });
    }
    console.log(this.formStock.value)

  }




  async getCategorias() {
    this.categorias.forEach((e) => {
      if (e.hijos) {
        console.log('Esta es una categoria padre', e);
        this.categoriasPadre.push(e);
      } else {
        //console.log('Esta es una categoria hijo', e);
        this.categoriasHijo.push(e);
      }
    });
    // await this.getCategoriasPadreHijo();
  }

  seleccionarPadre(id: number){
    console.log(id);
    //  selecciono el rol en el formulario, traigo el rol seleccionado y lo seteo a mi usuario
    const control = <FormGroup>this.formStock.controls['categoria'];
    // verifico q no me envie un null
    if (id != null) {
      // traigo el rol utilizando el id que me envian por formulario
      this.categoriaService.getOne(id).subscribe((padre) => {

        this.categoriaSeleccionada = padre;
        // seteo el formulario con el rol id y el nombre del rol traido
        this.formStock.controls.categoria.setValue({
          id: this.categoriaSeleccionada.id,
          nombreCategoria: this.categoriaSeleccionada.nombreCategoria
        });

      });
    }
    console.log(this.formStock.value)

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
        Swal.fire('success', 'Articulo agregado ', 'success');
      },
      (error) => {

        console.warn("error =>  ", error);
      }
    );
  }

  delete(articulo: ArticuloInsumo) {
    Swal.fire({
      title: 'Estas seguro?',
      text: ' No podrás revertir esto!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar articulo!',
    }).then((result) => {
      if (result.value) {
        this.artInsumoService.delete(articulo.id).subscribe(
          (res) => {
            console.log(articulo.id);
            const indexArticulo = this.articulosInsumos.indexOf(articulo);
            this.articulosInsumos.splice(indexArticulo, 1);

            Swal.fire('Deleted!', 'Articulo eliminado con éxito', 'success');
          },
          (error) => {

            console.warn("error =>  ", error);
          }
        );
      }
    });
  }

  update() {
    this.artInsumoService.put(this.id, this.formStock.value).subscribe(
      (data) => {
        console.log(this.id);
        this.getAllArticulos();
        this.esEditar = false;
        this.formStock.reset(); //Que me limpie los campos
      },
      (error) => {

        console.warn("error =>  ", error);
      }
    );
  }

  //form editar
  editar(articulo: ArticuloInsumo) {
    console.log(articulo);
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
      categoria: articulo.categoria,
    });
    this.id = articulo.id;
    console.log(this.id);
  }

  cerrar() {
    this.esEditar = false;
  }

  //trackBy Mejora el rendimiento
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

//   manejarError (error: HttpErrorResponse){
//     Swal.fire({
//       icon: 'error',
//       title: 'Ocurrio un problema',
//       html: 'Por favor vuelva a intentarlo mas tarde',
//     });
//     console.warn("error =>  ", error);
//     return throwError('Error atrapado');
//   }
 }
