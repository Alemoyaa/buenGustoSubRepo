import { RecetaDetalle } from './../../../entidades/RecetaDetalle';
import { RecetaDetalleService } from './../../../services/serviciosCliente/recetaDetalleServices/receta-detalle.service';
import { ArticuloManufacturado } from './../../../entidades/ArticuloManufacturado';
import { CategoriaAMService } from './../../../services/serviciosCliente/categoriaAM/categoria-am.service';
import { ArticuloManufacturadoService } from '../../../services/serviciosCliente/articuloManufacturadoServices/articuloManufacturado.service';
import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css'],

})
export class CatalogoComponent implements OnInit {

  detalle: RecetaDetalle = new RecetaDetalle();
  articuloSeleccionado: ArticuloManufacturado = new ArticuloManufacturado();

  pageActual: number = 1;//paginador
  rubro = ['Todo', 'Pizza', 'Lomo'];

  //@Output() ArticuloSeleccionado = new EventEmitter();


  constructor(public service: ArticuloManufacturadoService,
    public serviceReceta: RecetaDetalleService) {

  }

  ngOnInit(): void {

    this.getAll();
  }

  async getAll() {
    await this.service.getAll().subscribe((data) => {
      data.forEach(articulo => {
        if (articulo._urlImagen === null) { //Si en la bd no ahi imagen le seteamos la imagen de not available
          articulo._urlImagen = "../../../../assets/image-not-available.png";
        }
      })
      this.service.articulosManufacturados = data;
      //console.log(this.service.articulosManufacturados);
    });
  }

  getFiltro(filtro: string) {
    this.service.getAll().subscribe((data) => {
      this.service.articulosManufacturados = data, {
        query: {
          orderByChild: 'rubroGeneral',
          equalTo: filtro
        }
      }
      console.log(this.service.articulosManufacturados);
    });
    return this.service.articulosManufacturados;
  }

  onSelect(event) {
    let query = null;
    if (event.value == "Todos") {
      query = this.getAll();
    } else {
      query = this.getFiltro(event.value);
      query.subscribe(rubro => {
        this.service.articulosManufacturados = this.service.articulosManufacturados;
      })
    }
  }

  verArticulo(ArticuloMan: ArticuloManufacturado){ //Cuando le dan click para ver los detalles del producto
    this.articuloSeleccionado = ArticuloMan;//Asignamos el articulo que selecciono a un articulo nuevo, para enviarlo al modal
    this.getDetalleArticulo(this.articuloSeleccionado.id);//Traemos los detalles de la receta, de el articulo que selecciono
  }

  async getDetalleArticulo(id: number) {
    await this.serviceReceta.getOne(id).subscribe((data) => {
      this.detalle = data;
      console.log(this.detalle);
    });
  }
}
