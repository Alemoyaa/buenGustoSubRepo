import {CategoriaService} from './../../../../../../services/serviciosCliente/categoriaServices/categoria.service';
import {Categoria} from './../../../../../../entidades/Categoria';
import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {UnidadMedida} from '../../../../../../entidades/UnidadMedida';
import {AlertsService} from '../../../../../../services/alertServices/alerts.service';

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
  id: number;
  esEditar: boolean = false;

  categoria: Categoria = {
    id: null,
    nombreCategoria: null,
    insumoOManuf: null,
    hijos: null,
    padre: null,
  };

  constructor(
    private fb: FormBuilder,
    private sweet: AlertsService,
    private serviceCate: CategoriaService) {
  }

  ngOnInit(): void {
    this.getAllCategoria();
    this.crearFormulario();
  }

  get filtrar(): Categoria[] {
    const matcher = new RegExp(this.filtroBuscador, 'i');
    return this.listaCategorias.filter((categoria) => {
      return matcher.test([categoria.nombreCategoria].join());
    });
  }

  getAllCategoria() {
    this.serviceCate.getAll().subscribe(
      (res) => {
        this.listaCategorias = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  crearFormulario() {
    this.formularioCategoria = new FormGroup({
      id: new FormControl(null),
      nombreCategoria: new FormControl(null),
      insumoOManuf: new FormControl(false),
      padre: new FormControl(null)
    });
  }

  eliminar(categoriaAct: Categoria) {
    const opcion = confirm('¿Esta seguro que desea eliminar?');
    if (opcion) {
      this.serviceCate.delete(categoriaAct.id).subscribe((data) => {
        alert('Registro eliminado');
        const indexArticulo = this.listaCategorias.indexOf(categoriaAct);
        this.listaCategorias.splice(indexArticulo, 1);
        this.sweet.mensajeSuccess('Eliminacion exitosa', '');
      }, (err) => {
        console.log(err);
        this.sweet.mensajeError(
          'Error',
          'Hubo un problema al eliminar el articulo'
        );
      });
    }
  }

  actualizar() {
    this.serviceCate.put(this.id, this.formularioCategoria.value).subscribe(
      (data) => {
        this.sweet.mensajeSuccess(
          'Actualizacion realizada',
          `La unidad ${this.formularioCategoria.value.denominacion} se actualizo correctamente, recuerde que puede modificarlo cuando usted lo desee`
        );
        console.log(data);
        this.getAllCategoria();
        this.esEditar = false;
        this.formularioCategoria.reset();
      }, error => {
        this.sweet.mensajeError(
          'No se ah podido actualizar el Rol del usuario',
          'ah ocurrido un error y no se ah podido realizar la actualizacio, porfavor verifique que esten todos los datos correctos'
        );
        console.error(error);
      });
  }

  editar(categoria: Categoria) {
    this.esEditar = true;
    this.formularioCategoria.setValue({
      id: categoria.id,
      nombreCategoria: categoria.nombreCategoria,
      insumoOManuf: categoria.insumoOManuf,
      padre : categoria.padre
    });
    this.id = categoria.id;
  }

  crear() {
    this.serviceCate.post(this.formularioCategoria.value).subscribe(
      (data) => {
        this.listaCategorias.push(data);
        this.getAllCategoria();
        this.formularioCategoria.reset();
        this.sweet.mensajeSuccess('Articulo agregado', 'success');
      },
      (err) => {
        this.sweet.mensajeError('Ocurrio un problema', 'Por favor vuelva a intentarlo mas tarde');
        console.log(err);
      }
    );
  }

  cerrar() {
    this.crearFormulario();
    this.esEditar = false;
  }

}
