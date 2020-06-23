import {Component, OnInit} from '@angular/core';
import {UnidadMedidaService} from '../../../../../../services/serviciosCliente/unidadMedidaServices/unidad_medida.services';
import {UnidadMedida} from '../../../../../../entidades/UnidadMedida';
import {Categoria} from '../../../../../../entidades/Categoria';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {AlertsService} from '../../../../../../services/alertServices/alerts.service';

@Component({
  selector: 'app-unidad-medida-platos',
  templateUrl: './unidad-medida-platos.component.html',
  styleUrls: ['./unidad-medida-platos.component.css']
})
export class UnidadMedidaPlatosComponent implements OnInit {

  formularioUnidadMedida: FormGroup;
  listaUnidadMedidas: UnidadMedida[] = [];

  pageActual: number = 1;

  filtroBuscador: any = '';
  id: number;
  esEditar: boolean = false;

  constructor(
    private fb: FormBuilder,
    private sweet: AlertsService,
    private serviceUniMed: UnidadMedidaService) {
  }

  ngOnInit(): void {
    this.getAllUnidadMedida();
    this.crearFormulario();
  }

  get filtrar(): UnidadMedida[] {
    var matcher = new RegExp(this.filtroBuscador, 'i');
    return this.listaUnidadMedidas.filter(function (unidad) {
      return matcher.test([unidad.denominacion, unidad.abreviatura].join());
    });
  }

  getAllUnidadMedida() {
    this.serviceUniMed.getAll().subscribe(value => {
      this.listaUnidadMedidas = value;
      console.log(this.listaUnidadMedidas);
    }, error => {
      this.sweet.mensajeError(
        'Ocurrio un error',
        'Vuelva a intentarlo mas tarde'
      );
      console.log(error);
    });
  }

  crearFormulario() {
    this.formularioUnidadMedida = new FormGroup({
      id: new FormControl(null),
      abreviatura: new FormControl(null),
      denominacion: new FormControl(null),
    });
  }

  eliminar(unidadMedidaElim: UnidadMedida) {
    const opcion = confirm('¿Esta seguro que desea eliminar?');
    if (opcion) {
      this.serviceUniMed.delete(unidadMedidaElim.id).subscribe((data) => {
        alert('Registro eliminado');
        const indexArticulo = this.listaUnidadMedidas.indexOf(unidadMedidaElim);
        this.listaUnidadMedidas.splice(indexArticulo, 1);
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
    this.serviceUniMed.put(this.id, this.formularioUnidadMedida.value).subscribe(
      (data) => {
        this.sweet.mensajeSuccess(
          'Actualizacion realizada',
          `La unidad ${this.formularioUnidadMedida.value.denominacion} se actualizo correctamente, recuerde que puede modificarlo cuando usted lo desee`
        );
        console.log(data);
        this.getAllUnidadMedida();
        this.esEditar = false;
        this.formularioUnidadMedida.reset();
    }, error => {
        this.sweet.mensajeError(
          'No se ah podido actualizar el Rol del usuario',
          'ah ocurrido un error y no se ah podido realizar la actualizacio, porfavor verifique que esten todos los datos correctos'
        );
        console.error(error);
    });
  }

  crear() {
    this.serviceUniMed.post(this.formularioUnidadMedida.value).subscribe(
      (data) => {
        this.listaUnidadMedidas.push(data);
        this.getAllUnidadMedida();
        this.formularioUnidadMedida.reset();
        this.sweet.mensajeSuccess('Articulo agregado','success');
      },
      (err) => {
        this.sweet.mensajeError('Ocurrio un problema','Por favor vuelva a intentarlo mas tarde');
        console.log(err);
      }
    );
  }

  cerrar() {
    this.crearFormulario()
    this.esEditar = false;
  }

  editar(unidad: UnidadMedida) {
    this.esEditar = true;
    this.formularioUnidadMedida.setValue({
      id: unidad.id,
      denominacion: unidad.denominacion,
      abreviatura: unidad.abreviatura
    });
    this.id = unidad.id;
    console.log(this.id);
  }
}

