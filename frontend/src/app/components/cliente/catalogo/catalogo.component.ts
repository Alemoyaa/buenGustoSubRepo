import { ArticuloManufacturadoService } from '../../../services/serviciosCliente/articuloManufacturadoServices/articuloManufacturado.service';
import { ArticuloManufacturado } from 'src/app/entidades/ArticuloManufacturado';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css'],

})
export class CatalogoComponent implements OnInit {

  articulosManufacturados: ArticuloManufacturado[] = [];
  rubro = ['Todo', 'Pizza', 'Lomo'];


  constructor(public service: ArticuloManufacturadoService) {
    ;
  }

  ngOnInit(): void {

    this.getAll();
  }

  async getAll(){
    await this.service.getAll().subscribe((data)=>{
      this.articulosManufacturados = data;
      console.log(this.articulosManufacturados);
    });
  }


  getFiltro(filtro: string){
    this.service.getAll().subscribe((data)=>{
      this.articulosManufacturados = data,{
        query:{
          orderByChild: 'rubroGeneral',
          equalTo: filtro
        }
      }
      console.log(this.articulosManufacturados);
    });
    return this.articulosManufacturados;
  }

  onSelect(event){
    let query=null;
    if(event.value== "Todos"){
      query= this.getAll();
    }else{
      query = this.getFiltro(event.value);
      query.subscribe(rubro =>{
        this.articulosManufacturados= this.articulosManufacturados;
      })
    }
  }

}
