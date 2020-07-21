import { Component, OnInit, Input } from '@angular/core';
import { ArticuloInsumoService } from 'src/app/services/serviciosCliente/articuloInsumoServices/articuloInsumo.service';
import { Router } from '@angular/router';
import { ArticuloInsumo } from 'src/app/entidades/ArticuloInsumo';

@Component({
  selector: 'app-articulos-insumo-catalogo',
  templateUrl: './articulos-insumo-catalogo.component.html',
  styleUrls: ['./articulos-insumo-catalogo.component.css']
})
export class ArticulosInsumoCatalogoComponent implements OnInit {
  filtroBuscador: any = '';
  pageActualArticulos: number = 1;
  articulosInsumo: Array<ArticuloInsumo> = [];
  @Input() set parametroBusqueda(param) {
    if (param) {
      this.filtroBuscador = param;
    } else {
      this.filtroBuscador = '';
    }
  }
  constructor(public articulosInsumoService: ArticuloInsumoService,
    private router: Router) { }

  ngOnInit(): void {
    this.getArticulos();
  }

  getArticulos() {
    this.articulosInsumoService.getAll().subscribe((data) => {
      this.articulosInsumo = data;
    });

  }
  goToDetail(id, articulo) {
    this.router.navigate(['detalle-insumo/', id]);
  }
  get filtrarBebidas(): ArticuloInsumo[] {
    var matcher = new RegExp(this.filtroBuscador, 'i');
    return this.articulosInsumo.filter(function (articulo) {
      return matcher.test([
        articulo.denominacion,
        articulo.categoria.nombreCategoria,
        articulo.precio_de_venta,
        articulo.categoria.padre?.nombreCategoria
      ].join());
    });
  }





}
