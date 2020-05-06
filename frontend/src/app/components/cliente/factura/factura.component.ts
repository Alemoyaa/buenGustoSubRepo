import { Pedido } from './../../../entidades/Pedido';
import { Usuario } from '../../../entidades/Usuario';
import { Factura } from './../../../entidades/Factura';
import { FacturaService } from './../../../services/serviciosCliente/facturaServices/factura.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import * as jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.css'],
})
export class FacturaComponent implements OnInit {
  factura: Factura;

  @Input() clienteUserFactura: Usuario;

  @Input() pedidosUserFactura: Pedido;

  constructor(
    private rutaActiva: ActivatedRoute,
    private servicio: FacturaService
  ) { }

  ngOnInit(): void {
    this.rutaActiva.params.subscribe((data) => {
      if (data.id !== '0') {
        this.getOne(data.id);
      }
    });
  }

  async getOne(id: number) {
    await this.servicio.getOne(id).subscribe((data) => {
      this.factura = data;
    });
  }

  crearFacturaPDF() {
    var data = document.getElementById('facturaPDF');

    html2canvas(data).then((canvas) => {
      // Configuracion necesaria para la foto
      var imgWidth = 208;
      var imgHeight = (canvas.height * imgWidth) / canvas.width;

      const contentDataURL = canvas.toDataURL('image/png'); //Creamos una imagen la cual despues convertimos
      let pdf = new jsPDF('p', 'mm', 'a4'); // A4 va a ser el tamaño del PDF
      var position = 0;
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
      pdf.save('factura.pdf'); // Generamos el PDF
    });
  }
}
