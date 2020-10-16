import { AlertsService } from './../../../services/alertServices/alerts.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from './../../../services/loginServices/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  // formulario para logear
  formularioRegister: FormGroup;
  mostrarCargar: boolean = false;
  datosCorrectos: boolean = true;
  textoError: string = '';

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private alertsService: AlertsService
  ) { }

  ngOnInit(): void {
    this.crearFormularioRegister();
  }

  // crear formulario para logear
  crearFormularioRegister() {
    this.formularioRegister = this.fb.group({
      // validamos el email para que sea requerido y que tenga formato de email,
      // mientras que a la pw solamente le ponemos una validacion de requerimiento
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(4)])],
    });
  }

  registrarConMailPassword() {
    if (this.formularioRegister.valid) {
      this.datosCorrectos = true;
      this.mostrarCargar = true;
      this.loginService.register(
        this.formularioRegister.value.email,
        this.formularioRegister.value.password
      );
      // espera 2 segundos para mostrar el cargar y si el usuario esta en uso muestra una alerta
      setTimeout(() => {
        if (!this.loginService.logueado) {
          this.datosCorrectos = false;
          this.mostrarCargar = false;
          this.alertsService.mensajeError(
            'Error al crear la cuenta',
            this.loginService.mensajeError
          );
          this.textoError =
            this.loginService.mensajeError;
        } else {

        }
      }, 2000);
      // else en caso de q no funcionen las validaciones en el boton
    } else {
      this.datosCorrectos = false;
      this.mostrarCargar = false;
      this.textoError =
        'Porfavor revisa que los datos sean completados en su formato correcto';
    }
  }

  ingresarConGoogle() {
    this.loginService.loginGoogle();
  }

  get emailNoValido() {
    return this.formularioRegister.get('email').invalid &&
      this.formularioRegister.get('email').touched;
  }

  get passwordNoValido() {
    return this.formularioRegister.get('password').invalid &&
      this.formularioRegister.get('password').touched;
  }
}
