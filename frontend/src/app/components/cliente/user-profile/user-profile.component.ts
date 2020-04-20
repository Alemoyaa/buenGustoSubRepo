import { LoginService } from './../../../services/loginServices/login.service';
import { Cliente } from './../../../entidades/Cliente';
import { UserProfileService } from './../../../services/serviciosCliente/userProfileServices/user-profile.service';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent implements OnInit {
  cliente: Cliente = {
    id: 0,
    uidFirebase: '',
    nombre: '',
    apellido: '',
    telefono: null,
    email: '',
    foto: '',
    domicilio: {
      id: 0,
      calle: '',
      localidad: '',
      numero: null,
    },
  };

  constructor(
    private service: UserProfileService,
    private rutaActiva: ActivatedRoute,
    private serviceLogin: LoginService
  ) {}

  ngOnInit(): void {
    //this.rutaActiva.params.subscribe(data => { Esto anda, falta router el cliente y sacarle la foto mersa
    //if (data.id !== '0') {
    //this.getOne(data.id);
    //}
    //});
    this.datosUser();
  }

  datosUser() {
    return this.serviceLogin.datosGoogle(this.cliente); //me traigo los datos de google desde el service
  }

  async getOne(id: number) {
    await this.service.getOne(id).subscribe((data) => {
      console.log(data);
      this.cliente = data;
    });
  }

  /*
  HTML DE FACTURA:

  Typescript:
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

  }*/
}
