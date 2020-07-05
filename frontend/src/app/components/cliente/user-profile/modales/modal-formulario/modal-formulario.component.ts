import { Component, OnInit, Input } from '@angular/core';
import { Cliente } from 'src/app/entidades/Cliente';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from 'src/app/services/loginServices/login.service';
import { LocalidadService } from 'src/app/services/serviciosCliente/localidadServices/localidad.service';
import { AlertsService } from 'src/app/services/alertServices/alerts.service';
import { ClienteService } from 'src/app/services/serviciosCliente/clienteServices/cliente.service';
import { Localidad } from 'src/app/entidades/Localidad';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-modal-formulario',
  templateUrl: './modal-formulario.component.html',
  styleUrls: ['./modal-formulario.component.css']
})
export class ModalFormularioComponent implements OnInit {
  listaLocalidades: Localidad[] = [];
  cliente: Cliente;
  @Input() set clienteUser(cliente) {
    this.cliente = cliente;
  };
  constructor(    
    private serviceCliente: ClienteService,
    private rutaActiva: ActivatedRoute,
    private serviceLogin: LoginService,
    private serviceLocalidad: LocalidadService,
    private serviceAlert: AlertsService) { }

  ngOnInit(): void {
    this.rutaActiva.params.subscribe(
      (data) => {
        if (data.id !== null) {
          
          this.getLocalidades();
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
  }

  updateUsuario(formUser: NgForm) {
    console.log(formUser.value);
    if (formUser.invalid) {
      console.log('invalido', formUser.invalid);
      this.serviceAlert.mensajeError(
        'La fecha son incorrectas',
        'Por favor revise el orden de las fechas ingresadas'
      );
    } else {

      this.serviceCliente.put(this.cliente.id, this.cliente).subscribe(
        (res) => {
          this.cliente = res;
          this.serviceAlert.mensajeSuccess(
            'Realizado',
            'Sus datos fueron actualizados con exito'
          );
        },
        (err) => {
          this.serviceAlert.mensajeError(
            'Ocurrio un problema',
            'Por favor vuelva a intentarlo mas tarde'
          );
          console.log(err);
        }
      );
    }
  }

  
  async getLocalidades() {
    await this.serviceLocalidad.getAll().subscribe(
  
      (res) => {
        console.log('localidad ', res);
        this.listaLocalidades = res;
      },
      (err) => {
        console.error(err);
      }
    );
  }
  mostrarDatos(id: number) {
    console.log(id);

    this.serviceLocalidad.getOne(id).subscribe((localidad) => {

      // seteo el formulario con el rol id y el nombre del rol traido
      this.cliente.domicilio.localidad = {
        id: localidad.id,
        nombre: localidad.nombre,
        provincia: localidad.provincia

      }

    });

  }

}
