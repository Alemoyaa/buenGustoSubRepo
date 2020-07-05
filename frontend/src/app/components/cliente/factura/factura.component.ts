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
  cliente: Cliente;
  @Input() set clienteUser(cliente) {
    this.cliente = cliente;
  };

  facturaCliente: Factura[] = [];

  constructor(private servicio: FacturaService) { }

  ngOnInit() {

    this.getAll();

  }

  async getAll() {

    await this.servicio.getAll().subscribe(
      (data) => {
        data.forEach((factura) => {
          // let uid = ;

          if (
            this.cliente.usuario.uid_firebase === factura.pedidofacturado.clientePedido.usuario.uid_firebase
          ) {
            this.facturaCliente.push(factura);
       
          }
        });
        // this.facturaCliente = data
      },
      (error) => {
        console.log('Error');
      }
    );
  }
}
