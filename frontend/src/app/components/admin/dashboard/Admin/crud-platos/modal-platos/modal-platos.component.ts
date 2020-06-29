import { RubroGeneralService } from './../../../../../../services/serviciosCliente/rubro-general.service';
import { UnidadMedida } from 'src/app/entidades/UnidadMedida';

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, FormArray } from '@angular/forms';
import Swal from 'sweetalert2';
import { ArticuloManufacturado } from 'src/app/entidades/ArticuloManufacturado';
import { ArticuloManufacturadoService } from 'src/app/services/serviciosCliente/articuloManufacturadoServices/articuloManufacturado.service';
import { AlertsService } from 'src/app/services/alertServices/alerts.service';
import { ArticuloInsumo } from 'src/app/entidades/ArticuloInsumo';
import { RubroGeneral } from '../../../../../../entidades/RubroGeneral';
import { ArticuloInsumoService } from '../../../../../../services/serviciosCliente/articuloInsumoServices/articuloInsumo.service';
import { UnidadMedidaService } from 'src/app/services/serviciosCliente/unidadMedidaServices/unidad_medida.services';

@Component({
  selector: 'app-modal-platos',
  templateUrl: './modal-platos.component.html',
  styleUrls: ['./modal-platos.component.css']
})
export class ModalPlatosComponent implements OnInit {
  // cargar datos de ingredientes
  nombreIngrediente: ArticuloInsumo[];
  unidadDeMedidaIngrediente: UnidadMedida[];
  rubroGeneral: RubroGeneral[];

  esEditar: boolean = false;

  //formulario
  formularioArticulo: FormGroup;
  // articuloActualizar: ArticuloManufacturado;
  // id: number;
  constructor(
    private fb: FormBuilder,
    private serviceArtManufac: ArticuloManufacturadoService,
    private serviceArticuloInsumo: ArticuloInsumoService,
    private serviceUnidadDeMedida: UnidadMedidaService,
    private serviceRubroGeneral: RubroGeneralService,
    private sweet: AlertsService,
    private alerts: AlertsService) { }

  ngOnInit(): void {

    this.crearFormulario();
    this.traerNombreIngredientes();
    this.traerUnidadesDeMedida();
    this.traerRubrosGenerales();
  }


  traerNombreIngredientes() {
    this.serviceArticuloInsumo.getAll().subscribe(articuloInsumo => {
      this.nombreIngrediente = articuloInsumo;

    });
  }

  // unidadDeMedidaIngrediente: UnidadMedida;
  traerUnidadesDeMedida() {
    this.serviceUnidadDeMedida.getAll().subscribe(unidadesDeMedida => {
      this.unidadDeMedidaIngrediente = unidadesDeMedida;
    });
  }

  // rubro: RubroGeneral[];
  traerRubrosGenerales() {
    this.serviceRubroGeneral.getAll().subscribe(rubro => {
      this.rubroGeneral = rubro;
    });
  }

  // (change)="seleccionarRubro($event.target.value)"

  seleccionarRubro(id: number) {
    this.serviceRubroGeneral.getOne(id).subscribe(rubro => {
      this.formularioArticulo.controls.rubro.setValue({
        id: rubro.id
      });
    });
  }

  seleccionarUnidadDeMedida(id: number) {
    console.log(id);

    const control = <FormArray>this.formularioArticulo.controls['lista_detalleManufacturado'];
    const controlunidad = <FormGroup>control.controls['UnidadMedidaID'];

    this.serviceUnidadDeMedida.getOne(id).subscribe(unidad => {

      console.log(unidad);
      console.log(control.value);
      console.log(controlunidad.value);

      controlunidad.setValue({
        id: unidad.id,

      });
      console.log(this.formularioArticulo.value);
    });


  }

  seleccionarIngrediente(id: number) {
    console.log(id);
    const control = <FormArray>this.formularioArticulo.controls['lista_detalleManufacturado']

    const controlarticulo = <FormGroup>control.controls['articuloInsumoID'];
    this.serviceArticuloInsumo.getOne(id).subscribe(articulo => {
 
      controlarticulo.setValue({
        id: articulo.id
      });
      console.log(this.formularioArticulo.value);
    });
  }

  // seleccionar

  crearFormulario() {
    this.formularioArticulo = new FormGroup({
      id: new FormControl(null),
      precio_de_venta: new FormControl(null),
      url_imagen: new FormControl(null),
      denominacion: new FormControl(null),
      costo_de_manuf: new FormControl(0),
      tiempo_estimado_manuf: new FormControl(null),
      lista_detalleManufacturado: this.fb.array([]),
      rubro: this.fb.group({
        id: new FormControl(0)
      })
    });
  }

  get lista_detalleManufacturado() {
    return this.formularioArticulo.get('lista_detalleManufacturado') as FormArray;
  }

  agregarIngrediente() {
    const ingredienteNuevo = new FormGroup({
      cantidad: new FormControl(0),
      UnidadMedidaID: new FormGroup({
        id: new FormControl(0),

      }),
      articuloInsumoID: new FormGroup({
        id: new FormControl(0),

      })
    });

    this.lista_detalleManufacturado.push(ingredienteNuevo);
  }

 


  cerrar() {
    this.crearFormulario()
    this.esEditar = false;
  }


  crear() {

    console.log(this.formularioArticulo.value);
    this.serviceArtManufac.post(this.formularioArticulo.value).subscribe(
      (data) => {
        // this.articuloActualizar = data;

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


  removerDetalle(id: number) {
    this.lista_detalleManufacturado.removeAt(id);
  }
// editar(articulo: ArticuloManufacturado) {
  //   console.log(articulo);
  //   this.esEditar = true;
  //   this.formularioArticulo.setValue({
  //     id: articulo.id,
  //     precio_de_venta: articulo.precio_de_venta,
  //     url_imagen: articulo.url_imagen,
  //     denominacion: articulo.denominacion,
  //     tiempo_estimado_manuf: articulo.tiempo_estimado_manuf,
  //     lista_detalleManufacturado: articulo.lista_detalleManufacturado,
  //   });
  //   this.id = articulo.id;
  //   console.log(this.id);
  // }

   // actualizar() {
  //   this.serviceArtManufac
  //     .put(this.id, this.formularioArticulo.value)
  //     .subscribe(
  //       (res) => {

  //         this.alerts.mensajeSuccess(
  //           'Actualizacion realizada',
  //           `El articulo ${this.articuloActualizar.denominacion} se actualizo correctamente, recuerde que puede modificarlo cuando usted lo desee`
  //         );
  //         console.log(this.id);

  //         this.esEditar = false;
  //         this.formularioArticulo.reset();
  //       },
  //       (err) => {
  //         this.alerts.mensajeError(
  //           'No se ah podido actualizar el Rol del usuario',
  //           'ah ocurrido un error y no se ah podido realizar la actualizacio, porfavor verifique que esten todos los datos correctos'
  //         );
  //       }
  //     );
  // }

}
