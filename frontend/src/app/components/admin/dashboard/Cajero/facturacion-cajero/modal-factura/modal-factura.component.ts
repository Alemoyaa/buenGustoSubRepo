import { Component, OnInit, Input } from '@angular/core';
import { Factura } from 'src/app/entidades/Factura';
import html2canvas from 'html2canvas';
import * as jsPDF from 'jspdf';

@Component({
  selector: 'app-modal-factura',
  templateUrl: './modal-factura.component.html',
  styleUrls: ['./modal-factura.component.css']
})
export class ModalFacturaComponent implements OnInit {
  factura: Factura;
  @Input() set facturaProp( factura ){
    if(factura){
      this.factura = factura;
    }
  }
  constructor() { }

  ngOnInit(): void {
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
