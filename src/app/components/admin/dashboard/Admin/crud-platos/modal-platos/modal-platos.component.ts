import { UnidadMedida } from 'src/app/entidades/UnidadMedida';

import { Component, OnInit, Input, Host } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, AbstractControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { ArticuloManufacturadoService } from 'src/app/services/serviciosCliente/articuloManufacturadoServices/articuloManufacturado.service';
import { AlertsService } from 'src/app/services/alertServices/alerts.service';
import { ArticuloInsumo } from 'src/app/entidades/ArticuloInsumo';
import { RubroGeneral } from '../../../../../../entidades/RubroGeneral';
import { ArticuloInsumoService } from '../../../../../../services/serviciosCliente/articuloInsumoServices/articuloInsumo.service';
import { UnidadMedidaService } from 'src/app/services/serviciosCliente/unidadMedidaServices/unidad_medida.services';
import { RubroGeneralService } from 'src/app/services/serviciosCliente/rubroGeneralServices/rubro-general.service';
import { ArticuloManufacturado } from '../../../../../../entidades/ArticuloManufacturado';
import { DetalleManufacturado } from 'src/app/entidades/DetalleManufacturado';
import { ArtManufacturadoPlatosComponent } from '../art-manufacturado-platos/art-manufacturado-platos.component';


@Component({
  selector: 'app-modal-platos',
  templateUrl: './modal-platos.component.html',
  styleUrls: ['./modal-platos.component.css']
})
export class ModalPlatosComponent implements OnInit {
  // cargar datos de ingredientes
  nombreIngrediente: Array<ArticuloInsumo> = [];
  unidadDeMedidaIngrediente: UnidadMedida[];
  rubroGeneral: RubroGeneral[];
  esEditar: boolean = false;
  // formulario
  formularioArticulo: FormGroup;

  articuloActualizar: ArticuloManufacturado;
  id: number;

  @Input() set platoProp(plato) {
    // funciona solo 1 vez el es editar q es cuando se pasa el dato del componente padre
    // por que el set input se ejecuta 1 vez
    this.esEditar = true;
    this.crearFormulario();
    // si plato tiene datos es decir es un plato para actualizar
    if (plato) {

      this.articuloActualizar = plato;
      console.log(this.articuloActualizar.lista_detalleManufacturado);
      this.formularioArticulo.patchValue({
        id: this.articuloActualizar.id,
        precio_de_venta: this.articuloActualizar.precio_de_venta,
        url_imagen: this.articuloActualizar.url_imagen,
        denominacion: this.articuloActualizar.denominacion,
        // costo_de_manuf: plato.costo_de_manuf,
        tiempo_estimado_manuf: this.articuloActualizar.tiempo_estimado_manuf,
        rubro: {
          id: this.articuloActualizar.rubro.id,
        },
      });
      this.editar();
      console.log(this.formularioArticulo.value);
    }
    // sino es un nuevo plato
    else {

      this.esEditar = false;
      this.crearFormulario();
    }
  }

  constructor(
    private fb: FormBuilder,
    private serviceArtManufac: ArticuloManufacturadoService,
    private serviceArticuloInsumo: ArticuloInsumoService,
    private serviceUnidadDeMedida: UnidadMedidaService,
    private serviceRubroGeneral: RubroGeneralService,
    private alerts: AlertsService,
    @Host() private hostManufacturado: ArtManufacturadoPlatosComponent) {
  }

  ngOnInit(): void {
    this.crearFormulario();
    this.traerNombreIngredientes();
    this.traerUnidadesDeMedida();
    this.traerRubrosGenerales();

  }

  traerNombreIngredientes() {
    this.serviceArticuloInsumo.getAll().subscribe(articuloInsumo => {
      articuloInsumo.forEach(articulo => {
        if (!articulo.es_catalogo) {
          this.nombreIngrediente.push(articulo);
        }
      });

    });
  }

  // unidadDeMedidaIngrediente: UnidadMedida;
  traerUnidadesDeMedida() {
    this.serviceUnidadDeMedida.getAll().subscribe(unidadesDeMedida => {
      this.unidadDeMedidaIngrediente = unidadesDeMedida;
    });
  }

  // (change)="seleccionarRubro($event.target.value)"

  // rubro: RubroGeneral[];
  traerRubrosGenerales() {
    this.serviceRubroGeneral.getAll().subscribe(rubro => {
      this.rubroGeneral = rubro;
    });
  }

  seleccionarRubro(id: number) {
    this.serviceRubroGeneral.getOne(id).subscribe(rubro => {
      this.formularioArticulo.controls.rubro.setValue({
        id: rubro.id
      });
    });
  }

  seleccionarUnidadDeMedida(id: number, i: number) {
    const control = this.formularioArticulo.get(['lista_detalleManufacturado', i, 'unidadMedidaID']);

    this.unidadDeMedidaIngrediente.filter(unidadDeMedidaArreglo => {
      if (unidadDeMedidaArreglo.id === id) {
        control.setValue({
          id: unidadDeMedidaArreglo.id,
        });
      }
    });
    console.log(control.value);
    console.log(this.formularioArticulo.value);
  }

  // seleccionar
  seleccionarIngrediente(id: number, i: number) {
    const control = this.formularioArticulo.get(['lista_detalleManufacturado', i, 'articuloInsumoID']);

    this.nombreIngrediente.filter((nombreDeIngredienteArreglo) => {
      if (nombreDeIngredienteArreglo.id === id) {
        control.setValue({
          id: nombreDeIngredienteArreglo.id
        });
      }
    });
    console.log(control.value);
    console.log(this.formularioArticulo.value);
  }

  crearFormulario() {
    this.formularioArticulo = this.fb.group({
      id: [null],
      precio_de_venta: [null, [Validators.required, Validators.pattern('[0-9]{1,9}')]],
      url_imagen: ['', Validators.required],
      denominacion: ['', Validators.required],
      // costo_de_manuf: [null],
      tiempo_estimado_manuf: [null, [Validators.required, Validators.pattern('[0-9]{1,3}')]],
      lista_detalleManufacturado: this.fb.array([]),
      rubro: this.fb.group({
        id: [null, Validators.required],
      })
    });
  }

  get lista_detalleManufacturado() {
    return this.formularioArticulo.get('lista_detalleManufacturado') as FormArray;
  }

  agregarIngrediente() {

    const ingredienteNuevo = this.fb.group({
      cantidad: [null, [Validators.required, Validators.pattern('[0-9]{1,4}')]],
      unidadMedidaID: this.fb.group({
        id: [null, Validators.required],
      }),
      articuloInsumoID: this.fb.group({
        id: [null, Validators.required],
      })
    });

    this.lista_detalleManufacturado.push(ingredienteNuevo);
  }

  cerrar() {
    this.esEditar = false;
  }

  crear() {

    this.serviceArtManufac.post(this.formularioArticulo.value).subscribe(
      (data) => {
        this.alerts.mensajeSuccess(
          'Creacion de plato realizada satisfactoriamente',
          `El Plato ${this.formularioArticulo.value.denominacion} se creo correctamente, recuerde que puede modificarlo cuando usted lo desee`
        );
        this.hostManufacturado.articuloManufacturado.push(data);
        this.formularioArticulo.reset();
      },
      (err) => {

        Swal.fire({
          icon: 'error',
          title: 'Ocurrió un problema',
          html: 'Por favor vuelva a intentarlo mas tarde',
        });
        console.log(err);
      }
    );
  }

  removerDetalle(id: number) {
    this.lista_detalleManufacturado.removeAt(id);
  }

  editar() {
    this.esEditar = true;
    // const control = <FormArray>this.formularioArticulo.get('lista_detalleManufacturado');
    this.articuloActualizar.lista_detalleManufacturado.forEach((detalleManufacturado, i) => {
      this.lista_detalleManufacturado.push(this.patchValues(detalleManufacturado));
      // control.push(this.patchValues(detalleManufacturado));
    });
  }
  patchValues(detalleManufacturado: DetalleManufacturado): AbstractControl {
    console.log(detalleManufacturado);
    return this.fb.group({
      cantidad: [detalleManufacturado.cantidad, [Validators.required, Validators.pattern('[0-9]{1,4}')]],
      unidadMedidaID: this.fb.group({
        id: [detalleManufacturado.unidadMedidaID.id, Validators.required],
      }),
      articuloInsumoID: this.fb.group({
        id: [detalleManufacturado.articuloInsumoID.id, Validators.required],
      })
    });
  }

  actualizar() {

    this.serviceArtManufac
      .put(this.formularioArticulo.value.id, this.formularioArticulo.value)
      .subscribe(
        (res) => {

          this.alerts.mensajeSuccess(
            'Actualización realizada',
            `El articulo ${this.articuloActualizar.denominacion} se actualizo correctamente, recuerde que puede modificarlo cuando usted lo desee`
          );


          this.esEditar = false;

          this.hostManufacturado.articuloManufacturado.filter(articulo => {
            if (articulo.id === res.id) {
              const indexOfArticulo = this.hostManufacturado.articuloManufacturado.indexOf(articulo);
              this.hostManufacturado.articuloManufacturado.splice(indexOfArticulo, 1, res);
            }
          });
          this.formularioArticulo.reset();
        },
        (err) => {
          this.alerts.mensajeError(
            'No se ah podido actualizar el Rol del usuario',
            'ah ocurrido un error y no se ah podido realizar la actualización, por favor verifique que este todos los datos correctos'
          );
        }
      );
  }
  get denominacionNoValido() {
    return this.formularioArticulo.get('denominacion').invalid &&
      this.formularioArticulo.get('denominacion').touched;
  }

  get precioNoValido() {
    return this.formularioArticulo.get('precio_de_venta').invalid &&
      this.formularioArticulo.get('precio_de_venta').touched;
  }

  get imagenNoValido() {
    return this.formularioArticulo.get('url_imagen').invalid &&
      this.formularioArticulo.get('url_imagen').touched;
  }
  get tiempoManufacturadoNoValido() {
    return this.formularioArticulo.get('tiempo_estimado_manuf').invalid &&
      this.formularioArticulo.get('tiempo_estimado_manuf').touched;
  }

  get rubroNoValido() {
    return this.formularioArticulo.get('rubro.id').invalid &&
      this.formularioArticulo.get('rubro.id').touched;
  }

  get ingredientesNoValido() {

    //this.formularioArticulo.get(['lista_detalleManufacturado'])

    return this.formularioArticulo.get('lista_detalleManufacturado').invalid &&
      this.formularioArticulo.get('lista_detalleManufacturado').touched;
  }

}
