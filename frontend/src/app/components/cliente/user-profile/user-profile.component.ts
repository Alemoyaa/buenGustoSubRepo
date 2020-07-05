import { AlertsService } from './../../../services/alertServices/alerts.service';
import { Localidad } from 'src/app/entidades/Localidad';
import { NgForm } from '@angular/forms';
import { ClienteService } from './../../../services/serviciosCliente/clienteServices/cliente.service';
import { LoginService } from './../../../services/loginServices/login.service';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cliente } from '../../../entidades/Cliente';
import { LocalidadService } from 'src/app/services/serviciosCliente/localidadServices/localidad.service';

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

  datosUser() {
    return this.serviceLogin.datosGoogle(this.cliente.usuario); //me traigo los datos de google desde el service
  }



  async getOneByUid(uid: string) {
    await this.serviceCliente.getByUidFirebase(uid).subscribe(
      (data) => {
        this.cliente = data;
      },
      (error) => { }
    );
  }

 


  pasarDatos(cliente){
    this.cliente = cliente;
  }
}
