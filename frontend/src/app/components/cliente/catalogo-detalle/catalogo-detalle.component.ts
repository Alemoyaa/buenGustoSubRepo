import { ArticuloManufacturadoService } from './../../../services/serviciosCliente/articuloManufacturadoServices/articuloManufacturado.service';
import { DetalleManufacturado } from './../../../entidades/DetalleManufacturado';
import { DetalleManufacturadoService } from './../../../services/serviciosCliente/detalleManufacturadoServices/detalle-manufacturado.service';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-catalogo-detalle',
  templateUrl: './catalogo-detalle.component.html',
  styleUrls: ['./catalogo-detalle.component.css'],
})
export class CatalogoDetalleComponent implements OnInit {

  detalle: DetalleManufacturado = new DetalleManufacturado();
  id: number;

  constructor(
    public serviceDetalleManuf: DetalleManufacturadoService,
    public serviceManuf: ArticuloManufacturadoService,
    private routActiv: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.routActiv.params.subscribe((data) => {
      this.id = data.id;
      this.getOne(data.id);
      console.log(data);
    });
  }

  async getOne(id: number) {
    await this.serviceDetalleManuf.getOne(id).subscribe((data) => {
      this.detalle = data;
      console.log('getOne');
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
