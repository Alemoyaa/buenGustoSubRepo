import { UnidadMedida } from 'src/app/entidades/UnidadMedida';

import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, FormBuilder, FormArray, Form} from '@angular/forms';
import Swal from 'sweetalert2';
import { ArticuloManufacturado } from 'src/app/entidades/ArticuloManufacturado';
import { ArticuloManufacturadoService } from 'src/app/services/serviciosCliente/articuloManufacturadoServices/articuloManufacturado.service';
import { AlertsService } from 'src/app/services/alertServices/alerts.service';
import { ArticuloInsumo } from 'src/app/entidades/ArticuloInsumo';
import { RubroGeneral } from '../../../../../../entidades/RubroGeneral';
import { ArticuloInsumoService } from '../../../../../../services/serviciosCliente/articuloInsumoServices/articuloInsumo.service';
import { UnidadMedidaService } from 'src/app/services/serviciosCliente/unidadMedidaServices/unidad_medida.services';
import { RubroGeneralService } from 'src/app/services/serviciosCliente/rubroGeneralServices/rubro-general.service';

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

  // formulario
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

  async seleccionarUnidadDeMedida(id: number, i) {
    console.log(id);

    console.log(i);

    const control = this.formularioArticulo.get(['lista_detalleManufacturado', i, 'UnidadMedidaID']);

    console.log(control);

    await this.serviceUnidadDeMedida.getOne(id).subscribe(unidad => {

      console.log(unidad);
      console.log(control.value);

      control.patchValue({
        id: unidad.id,

      });
      console.log(this.formularioArticulo.value);
    });


  }

  seleccionarIngrediente(id: number, i) {
    console.log(id);
    console.log(i);

    const control = this.formularioArticulo.get(['lista_detalleManufacturado', i, 'articuloInsumoID']) ;
    this.serviceArticuloInsumo.getOne(id).subscribe(articulo => {

      control.patchValue({
        id: articulo.id
      });
      console.log(this.formularioArticulo.value);
    });
  }

  // seleccionar

  crearFormulario() {
    this.formularioArticulo = this.fb.group({
      id: [null],
      precio_de_venta: [null],
      url_imagen: [''],
      denominacion: [''],
      costo_de_manuf: [null],
      tiempo_estimado_manuf: [null],
      lista_detalleManufacturado: this.fb.array([]),
      rubro: this.fb.group({
        id: [null],
      })
    });
  }

  get lista_detalleManufacturado() {
    return this.formularioArticulo.get('lista_detalleManufacturado') as FormArray;
  }

  agregarIngrediente() {
    const ingredienteNuevo = this.fb.group({
      cantidad: [null],
      UnidadMedidaID: this.fb.group({
        id: [null],

      }),
      articuloInsumoID: this.fb.group({
        id: [null],

      })
    });

    this.lista_detalleManufacturado.push(ingredienteNuevo);
  }




  cerrar() {
    this.crearFormulario();
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
  //           'ah ocurrido un error y no se ah podido realizar la actualización, por favor verifique que este todos los datos correctos'
  //         );
  //       }
  //     );
  // }

}
