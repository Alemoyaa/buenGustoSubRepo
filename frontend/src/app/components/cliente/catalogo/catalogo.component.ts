import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticuloManufacturado } from 'src/app/entidades/ArticuloManufacturado';
import { ArticuloManufacturadoService } from 'src/app/services/serviciosCliente/articuloManufacturadoServices/articuloManufacturado.service';
import { ArticuloInsumo } from 'src/app/entidades/ArticuloInsumo';
import { ArticuloInsumoService } from 'src/app/services/serviciosCliente/articuloInsumoServices/articuloInsumo.service';
import { RubroGeneralService } from 'src/app/services/serviciosCliente/rubroGeneralServices/rubro-general.service';
import { RubroGeneral } from 'src/app/entidades/RubroGeneral';
import { Categoria } from '../../../entidades/Categoria';
import { CategoriaService } from 'src/app/services/serviciosCliente/categoriaServices/categoria.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css'],
})
export class CatalogoComponent implements OnInit {
  rubroGeneral: Array<RubroGeneral> = [];
  categorias: Array<Categoria> = [];
  filtroBuscador: any = '';
  constructor(
    private serviceRubroGeneral: RubroGeneralService,
    private categoriaService: CategoriaService,
  ) { }
  ngOnInit() {
    this.getParametrosdeBuscador();


  }
  getParametrosdeBuscador() {

    this.traerRubrosGenerales();
    this.getAllCategorias();
  }

  traerRubrosGenerales() {
    this.serviceRubroGeneral.getAll().subscribe(rubro => {
      this.rubroGeneral = rubro;
    });
  }

  getAllCategorias() {
    this.categoriaService.getAll().subscribe(
      (categorias) => {
        categorias.forEach(categoria => {
          if (categoria.esCategoriaCatalogo) {
            this.categorias.push(categoria);
          }
        });
        console.log(this.categorias);

      },
      (error) => {
        console.warn('error =>  ', error);
      }
    );
  }

  seleccionarFiltroPlato(busqueda: string) {
    if (busqueda) {
      this.filtroBuscador = busqueda;
    } else {
      this.filtroBuscador = '';
    }
  }
  seleccionarFiltroBebidas(busqueda: string) {
    if (busqueda) {
      this.filtroBuscador = busqueda;
    } else {
      this.filtroBuscador = '';
    }
  }


}
