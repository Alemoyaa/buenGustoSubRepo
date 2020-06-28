import { Cliente } from './../../../entidades/Cliente';
import { FacturaService } from './../../../services/serviciosCliente/facturaServices/factura.service';
import { Factura } from './../../../entidades/Factura';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.css'],
})
export class FacturaComponent implements OnInit {
  @Input() clienteUser: Cliente;

  facturaCliente: Factura[] = [];

  constructor(private servicio: FacturaService) {}

  ngOnInit() {
    setTimeout(() => {
      this.getAll();
    }, 3000);
  }

  async getAll() {
    await this.servicio.getAll().subscribe(
      (data) => {
        data.forEach((factura) => {
          if (
            this.clienteUser.usuario.uid_firebase ===
            factura.pedidofacturado.ClientePedido.usuario.uid_firebase
          ) {
            this.facturaCliente.push(factura);
          }
        });
      },
      (error) => {
        console.log('Error');
      }
    );
  }
}
