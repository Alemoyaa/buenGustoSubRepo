import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../../../services/loginServices/login.service';
import { AlertsService } from 'src/app/services/alertServices/alerts.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  // formulario para logear
  formularioLogin: FormGroup;
  mostrarCargar: boolean = false;
  datosCorrectos: boolean = true;
  textoError: string = '';

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private alertsService: AlertsService) { }

  ngOnInit(): void {
    this.crearFormularioLogin();
  }

  // crear formulario para logear
  crearFormularioLogin() {
    this.formularioLogin = this.fb.group({
      // validamos el email para que sea requerido y que tenga formato de email,
      // mientras que a la pw solamente le ponemos una validacion de requerimiento
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.required],
    });
  }

  ingresarConEmailPassword() {

    if (this.formularioLogin.valid) {
      // mostramos cargador y damos por hecha la validacion del form
      this.datosCorrectos = true;
      this.mostrarCargar = true;

      // intentamos logear
      this.loginService
        .loginEmailPassword(
          this.formularioLogin.value.email,
          this.formularioLogin.value.password
        );
      // en caso de q no se logee se mostrara un mesanje a los 2 segundos de fracasar la peticion
      setTimeout(() => {
        if (!this.loginService.logueado) {
          this.datosCorrectos = false;
          this.mostrarCargar = false;
          this.alertsService.mensajeError('Error al iniciar Sesion', this.loginService.mensajeError);
          this.textoError = this.loginService.mensajeError;
        }
      },
        2000);

      // si no es q esta mal el formulario( posee una validacion el boton tambien para q no deje apretarse)
    } else {
      this.datosCorrectos = false;
      this.mostrarCargar = false;
      this.textoError = 'Porfavor revisa que los datos sean completados en su formato correcto';
    }
  }

  ingresarConGoogle() {
    this.loginService.loginGoogle();
  }

  recuperarPassword() {
    this.loginService
      .recuperarPassword(this.formularioLogin.value.email)
      .then(() => {
        this.alertsService.mensajeSuccess('Recuperacion de contraseña', 'Se ha enviado un correo a su cuenta. Porfavor siga los pasos indicados');
      });
  }
}
