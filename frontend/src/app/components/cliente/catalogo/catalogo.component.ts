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
  pageActual: number = 1; //paginador
  articulosManufacturado: Array<ArticuloManufacturado> = [];
  articulosInsumo: Array<ArticuloInsumo> = [];
  rubroGeneral: Array<RubroGeneral> = [];
  categorias: Array<Categoria> = [];
  preciomenor = 0;
  filtroBuscador: any = '';
  propiedad: any;
  constructor(
    public articulosManufacturadosService: ArticuloManufacturadoService,
    public articulosInsumoService: ArticuloInsumoService,
    private serviceRubroGeneral: RubroGeneralService,
    private categoriaService: CategoriaService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getArticulos();


  }

  getArticulos() {
    this.articulosManufacturadosService.getAll().subscribe((data) => {
      this.articulosManufacturado = data;
    });
    this.traerRubrosGenerales();
    this.articulosInsumoService.getAll().subscribe((data) => {
      this.articulosInsumo = data;
    });
    this.getAllCategorias();
  }

  goToDetail(id, articulo) {
    if (articulo === 0) {
      this.router.navigate(['detalle-manufacturado/', id]);
    } else {
      this.router.navigate(['detalle-insumo/', id]);
    }
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


  get filtrarPlatos(): ArticuloManufacturado[] {

    var matcher = new RegExp(this.filtroBuscador, 'i');

    return this.articulosManufacturado.filter(function (plato) {
      return matcher.test([plato.denominacion, plato.rubro.denominacion, plato.precio_de_venta,
      ].join());

    });
  }

  get filtrarBebidas(): ArticuloInsumo[] {

    var matcher = new RegExp(this.filtroBuscador, 'i');

    return this.articulosInsumo.filter(function (articulo) {
      return matcher.test([articulo.denominacion, articulo.categoria.nombreCategoria, articulo.precio_de_venta].join());
    });
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
