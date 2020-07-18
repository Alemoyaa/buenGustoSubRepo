import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticuloManufacturado } from 'src/app/entidades/ArticuloManufacturado';
import { ArticuloManufacturadoService } from 'src/app/services/serviciosCliente/articuloManufacturadoServices/articuloManufacturado.service';
import { ArticuloInsumo } from 'src/app/entidades/ArticuloInsumo';
import { ArticuloInsumoService } from 'src/app/services/serviciosCliente/articuloInsumoServices/articuloInsumo.service';
import { RubroGeneralService } from 'src/app/services/serviciosCliente/rubroGeneralServices/rubro-general.service';
import { RubroGeneral } from 'src/app/entidades/RubroGeneral';

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
  filtroBuscador: any = '';
  constructor(
    public articulosManufacturadosService: ArticuloManufacturadoService,
    public articulosInsumoService: ArticuloInsumoService,
    private serviceRubroGeneral: RubroGeneralService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getArticulos();
    this.traerRubrosGenerales();
  }

  getArticulos() {
    this.articulosManufacturadosService.getAll().subscribe((data) => {
      this.articulosManufacturado = data;
    });
    this.articulosInsumoService.getAll().subscribe((data) => {
      this.articulosInsumo = data;
    });
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


  get filtrar(): ArticuloManufacturado[] {

    var matcher = new RegExp(this.filtroBuscador, 'i');

    return this.articulosManufacturado.filter(function (plato) {
      return matcher.test([plato.denominacion, plato.rubro.denominacion, plato.precio_de_venta].join());
    });
  }
}
