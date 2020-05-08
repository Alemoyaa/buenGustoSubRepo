import { ArticuloManufacturadoService } from './../../../services/serviciosCliente/articuloManufacturadoServices/articuloManufacturado.service';
import { RecetaDetalle } from './../../../entidades/RecetaDetalle';
import { RecetaDetalleService } from './../../../services/serviciosCliente/recetaDetalleServices/receta-detalle.service';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-catalogo-detalle',
  templateUrl: './catalogo-detalle.component.html',
  styleUrls: ['./catalogo-detalle.component.css'],
})
export class CatalogoDetalleComponent implements OnInit {
  detalle: RecetaDetalle = new RecetaDetalle();
  id: number;
  constructor(
    public serviceReceta: RecetaDetalleService,
    public serviceManuf: ArticuloManufacturadoService,
    private routActiv: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.routActiv.params.subscribe((data) => {
      this.id = data.id;
      this.getOne(data.id);
      console.log(data);
    });
  }

  async getOne(id: number) {
    await this.serviceReceta.getOne(id).subscribe((data) => {
      this.detalle = data;
      console.log("getOne")
      console.log(this.detalle);
    });
  }

  addToCart() {
    let string = localStorage.getItem('carrito');
    let json = JSON.parse(string);
    json.push({ id: this.detalle.id });
    localStorage.setItem('carrito', JSON.stringify(json));
    console.log(localStorage.getItem('carrito'));
  }
}
