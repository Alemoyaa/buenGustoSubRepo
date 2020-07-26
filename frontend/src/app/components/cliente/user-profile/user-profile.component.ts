import { AlertsService } from './../../../services/alertServices/alerts.service';
import { Localidad } from 'src/app/entidades/Localidad';
import { NgForm } from '@angular/forms';
import { ClienteService } from './../../../services/serviciosCliente/clienteServices/cliente.service';
import { LoginService } from './../../../services/loginServices/login.service';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cliente } from '../../../entidades/Cliente';
import { LocalidadService } from 'src/app/services/serviciosCliente/localidadServices/localidad.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent implements OnInit {
  cliente: Cliente = {
    id: 0,
    nombre: '',
    apellido: '',
    telefono: null,
    domicilio: {
      id: 0,
      aclaracion: '',
      calle: '',
      nroDepartamento: null,
      numero: null,
      piso: null,
      localidad: {
        id: 0,
      },
    },
    usuario: {
      id: 0,
      email: '',
      uid_firebase: '',
      rol: null,
    },
  };

  listaLocalidades: Localidad[] = [];

  constructor(
    private serviceCliente: ClienteService,
    private rutaActiva: ActivatedRoute,
    private serviceLogin: LoginService,
    private serviceLocalidad: LocalidadService,
    private serviceAlert: AlertsService
  ) {}

  ngOnInit(): void {
    this.traerDatos();
   }

  datosUser() {
    return this.serviceLogin.datosGoogle(this.cliente.usuario); //me traigo los datos de google desde el service
  }

  traerDatos(){
    this.esperarAlert();
    this.rutaActiva.params.subscribe(
      (data) => {
        if (data.id !== null) {
          this.getOneByUid(data.id);

        }
      },
      (err) => {
        this.serviceAlert.mensajeWarning(
          'Usuario no encontrado',
          'El usuario no fue encontrado. Por favor vuelva a intentarlo mas tarde'
        );
        console.error(err);
      }
    );
    this.datosUser();
  }


  async getOneByUid(uid: string) {
    this.esperarAlert();
    await this.serviceCliente.getByUidFirebase(uid).subscribe(
      (data) => {
        this.serviceCliente.clienteCargadoDesdeBD = data;
        this.cliente = data;
        Swal.fire({
          icon: 'success',
          title: 'Datos cargados',
          showConfirmButton: false,
          timer: 1200,
        });
      },
      (error) => { }
    );
  }




  pasarDatos(cliente){
    this.cliente = cliente;
  }

  esperarAlert() {
    Swal.fire({
      title: 'Por favor espere',
      html: 'Recuperando los datos...',
      // timer: 1500,
      onBeforeOpen: () => {
        Swal.showLoading();
      },
    }).then((result) => {
      console.log(result);
    });
  }

}
