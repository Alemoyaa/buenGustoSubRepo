import { ArticuloManufacturado } from 'src/app/entidades/ArticuloManufacturado';
import { ProductosService } from './../../../services/productosServices/productos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

  articulosManufacturados: ArticuloManufacturado[] = [];

  constructor(public service: ProductosService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.service.getAll().subscribe((data)=>{
      console.log(data);
      this.articulosManufacturados = data;
    })
  }

}
