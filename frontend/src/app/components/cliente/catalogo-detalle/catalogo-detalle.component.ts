import { ArticuloManufacturadoDetalle } from './../../../entidades/ArticuloManufacturadoDetalle';
import { ArticuloManufacturadoDetalleService } from './../../../services/serviciosCliente/articuloManufacturadoDetalleServices/articulo-manufacturado-detalle.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-catalogo-detalle',
  templateUrl: './catalogo-detalle.component.html',
  styleUrls: ['./catalogo-detalle.component.css']
})
export class CatalogoDetalleComponent implements OnInit {

   detalle: ArticuloManufacturadoDetalle={
     articuloInsumo:null,
     articuloManufacturado: null,
     id:0,
     cantidad:0,
     unidadMedida: ''
   };

  constructor(public service: ArticuloManufacturadoDetalleService, private routActiv: ActivatedRoute ) {}

  ngOnInit(): void {

   this.routActiv.params.subscribe((data)=>{
       this.getOne(data.id);
       console.log(data+ " la data");
       console.log(data.id);
     });
  }

  async getOne(id: number){
   await this.service.getOne(id).subscribe((data) =>{
   this.detalle= data;
   console.log(this.detalle);
    });
  }

}


