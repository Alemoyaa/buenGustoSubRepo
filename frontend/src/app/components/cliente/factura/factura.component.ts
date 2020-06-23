import { FacturaService } from './../../../services/serviciosCliente/facturaServices/factura.service';
import { Usuario } from 'src/app/entidades/Usuario';
import { Factura } from './../../../entidades/Factura';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.css'],
})
export class FacturaComponent implements OnInit {
  @Input() clienteUser: Usuario;

  facturaCliente: Factura[] = [];

  constructor(private servicio: FacturaService) {}

  ngOnInit() {
    this.getAll();
  }

  async getAll() {
    await this.servicio.getAll().subscribe((data) => {
      data.forEach((factura) => {
        if (this.clienteUser.id === factura.pedidofacturado.clientePedido.id) {
          this.facturaCliente.push(factura);
          console.log(this.facturaCliente);
        }
      });
    });
  }
}
