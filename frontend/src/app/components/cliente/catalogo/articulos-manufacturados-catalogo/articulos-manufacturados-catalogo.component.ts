import { Component, OnInit, Input } from '@angular/core';
import { ArticuloManufacturado } from 'src/app/entidades/ArticuloManufacturado';
// tslint:disable-next-line: max-line-length
import { ArticuloManufacturadoService } from 'src/app/services/serviciosCliente/articuloManufacturadoServices/articuloManufacturado.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-articulos-manufacturados-catalogo',
  templateUrl: './articulos-manufacturados-catalogo.component.html',
  styleUrls: ['./articulos-manufacturados-catalogo.component.css']
})
export class ArticulosManufacturadosCatalogoComponent implements OnInit {
  articulosManufacturado: Array<ArticuloManufacturado> = [];
  filtroBuscador: any = '';
  pageActualPlatos: number = 1;

  @Input() set parametroBusqueda(param) {
    if (param) {
      this.filtroBuscador = param;
    } else {
      this.filtroBuscador = '';
    }
  }
  constructor(
    public articulosManufacturadosService: ArticuloManufacturadoService,
    private router: Router) { }

  ngOnInit(): void {
    this.getArticulos();
  }


  getArticulos() {
    this.articulosManufacturadosService.getAll().subscribe((data) => {
      this.articulosManufacturado = data;
    });
  }

  goToDetail(id, articulo) {

    this.router.navigate(['detalle-manufacturado/', id]);

  }

  get filtrarPlatos(): ArticuloManufacturado[] {

    var matcher = new RegExp(this.filtroBuscador, 'i');

    return this.articulosManufacturado.filter(function (plato) {
      return matcher.test([plato.denominacion, plato.rubro.denominacion, plato.precio_de_venta,
      ].join());

    });
  }

}
