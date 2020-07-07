import {AlertsService} from 'src/app/services/alertServices/alerts.service';
import {CategoriaService} from './../../../../../../services/serviciosCliente/categoriaServices/categoria.service';
import {Categoria} from './../../../../../../entidades/Categoria';
import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-categoria-platos',
  templateUrl: './categoria-platos.component.html',
  styleUrls: ['./categoria-platos.component.css'],
})
export class CategoriaPlatosComponent implements OnInit {
  listaCategorias: Categoria[] = [];
  pageActual = 1;

  formularioCategoria: FormGroup;

  filtroBuscador: any = '';
  // id: number;
  esEditar: boolean = false;

  categoría: Categoria;

  constructor(
    private fb: FormBuilder,
    private sweet: AlertsService,
    private serviceCate: CategoriaService
  ) {
  }

  get filtrar(): Categoria[] {
    const matcher = new RegExp(this.filtroBuscador, 'i');
    return this.listaCategorias.filter((categoria) => {
      return matcher.test([categoria.nombreCategoria].join());
    });
  }

  ngOnInit() {
    this.crearFormulario();
    this.getAllCategoria();
  }

  async getAllCategoria() {
    await this.serviceCate.getAll().subscribe(
      (res) => {
        this.listaCategorias = res;
      },
      (err) => {
        console.log('Error getAll', err);
      }
    );
  }

  crearFormulario() {
    this.formularioCategoria = this.fb.group({
      id: [null],
      nombreCategoria: [''],
      esCategoriaCatalogo: [null],
      padre: this.fb.group({
        id: [0]
      }),
    });
    /*this.formularioCategoria = new FormGroup({
      id: new FormControl(null),
      nombreCategoria: new FormControl(null),
      insumoOManuf: new FormControl(false),
      padre: new FormControl(null)
    });*/
  }

  seleccionarCategoria(id: number) {
    const control = this.formularioCategoria.get('padre');

    this.listaCategorias.filter(categoriaArreglo => {
      if (categoriaArreglo.id === id) {
        control.setValue({
          id: categoriaArreglo.id,
        });
      }
    });
  }

  eliminar(categoriaAct: Categoria) {
    const opcion = confirm('¿Esta seguro que desea eliminar?');
    if (opcion) {
      this.serviceCate.delete(categoriaAct.id).subscribe(
        (data) => {
          const indexArticulo = this.listaCategorias.indexOf(categoriaAct);
          this.listaCategorias.splice(indexArticulo, 1);
          this.sweet.mensajeSuccess('Eliminación exitosa', '');
        },
        (err) => {
          console.log(err);
          this.sweet.mensajeError(
            'Error',
            'Hubo un problema al eliminar el articulo'
          );
        }
      );
    }
  }

  actualizar() {
    this.serviceCate.put(this.formularioCategoria.value.id, this.formularioCategoria.value).subscribe(
      (data) => {
        this.sweet.mensajeSuccess(
          'Actualización realizada',
          `La unidad ${this.formularioCategoria.value.denominacion} se actualizo correctamente, recuerde que puede modificarlo cuando usted lo desee`
        );
        console.log(data);
        this.getAllCategoria();
        this.esEditar = false;
        this.formularioCategoria.reset();
      },
      (error) => {
        this.sweet.mensajeError(
          'No se ah podido actualizar el Rol del usuario',
          'ah ocurrido un error y no se ah podido realizar la actualizacio, porfavor verifique que esten todos los datos correctos'
        );
        console.error(error);
      }
    );
  }

  editar(categoria: Categoria) {
    this.esEditar = true;
    this.formularioCategoria.patchValue({
      id: categoria.id,
      nombreCategoria: categoria.nombreCategoria,
      esCategoriaCatalogo: categoria.esCategoriaCatalogo,
      padre: {
        id : categoria.padre.id,
      },
    });
    // console.log(JSON.stringify(categoria) + 'Categoría');
    // console.log(JSON.stringify(this.formularioCategoria.value) + 'Formulario');
    // this.id = categoria.id;
  }

  crear() {
    this.serviceCate.post(this.formularioCategoria.value).subscribe(
      (data) => {
        this.listaCategorias.push(data);
        // this.getAllCategoria();
        this.formularioCategoria.reset();
        this.sweet.mensajeSuccess('Articulo agregado', 'success');
      },
      (err) => {
        this.sweet.mensajeError(
          'Ocurrió un problema',
          'Por favor vuelva a intentarlo mas tarde'
        );
        console.log(err);
      }
    );
  }

  cerrar() {
    this.crearFormulario();
    this.esEditar = false;
  }
}
