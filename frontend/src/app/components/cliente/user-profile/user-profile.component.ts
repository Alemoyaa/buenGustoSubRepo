import { Component, OnInit } from '@angular/core';
import * as jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  crearFacturaPDF(){
    var data = document.getElementById('page-top');

    html2canvas(data).then(canvas => {
      // Configuracion necesaria para la foto
      var imgWidth = 208;
      var imgHeight = canvas.height * imgWidth / canvas.width;

      const contentDataURL = canvas.toDataURL('image/png') //Creamos una imagen la cual despues convertimos
      let pdf = new jsPDF('p', 'mm', 'a4'); // A4 va a ser el tamaño del PDF
      var position = 0;
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
      pdf.save('factura.pdf'); // Generamos el PDF
    });

  }

}
