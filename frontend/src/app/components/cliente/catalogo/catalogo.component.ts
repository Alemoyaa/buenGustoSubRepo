import { ArticuloManufacturadoService } from '../../../services/serviciosCliente/articuloManufacturadoServices/articuloManufacturado.service';
import { ArticuloManufacturado } from 'src/app/entidades/ArticuloManufacturado';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css'],
})
export class CatalogoComponent implements OnInit {
  pageActual: number = 1; //paginador
  articulosManufacturados: ArticuloManufacturado[] = [];
  rubro = ['Todo', 'Pizza', 'Lomo'];

  constructor(public service: ArticuloManufacturadoService) {}

  ngOnInit(): void {
    this.getAll();
  }

  async getAll() {
    await this.service.getAll().subscribe((data) => {
      this.articulosManufacturados = data;
      console.log(this.articulosManufacturados);
    });
  }

  getFiltro(filtro: string) {
    this.service.getAll().subscribe((data) => {
      (this.articulosManufacturados = data),
        {
          query: {
            orderByChild: 'rubroGeneral',
            equalTo: filtro,
          },
        };
      console.log(this.articulosManufacturados);
    });
    return this.articulosManufacturados;
  }

  onSelect(event) {
    let query = null;
    if (event.value == 'Todos') {
      query = this.getAll();
    } else {
      query = this.getFiltro(event.value);
      query.subscribe((rubro) => {
        this.articulosManufacturados = this.articulosManufacturados;
      });
    }
  }

  catPizzas = false;
  catLomos = false;
  catBebidas = false;

  clearBoards() {
    this.catPizzas = false;
    this.catLomos = false;
    this.catBebidas = false;
  }

  setBoard(board) {
    this.clearBoards();
    if (board === 'catPizzas') {
      this.catPizzas = true;
    }
    if (board === 'catLomos') {
      this.catLomos = true;
    }
    if (board === 'catBebidas') {
      this.catBebidas = true;
    }
  }
}
