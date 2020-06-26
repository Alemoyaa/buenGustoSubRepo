import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../../../services/loginServices/login.service';

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

  constructor(private fb: FormBuilder, private loginService: LoginService) {}

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
    this.loginService.loginEmailPassword(
      this.formularioLogin.value.email,
      this.formularioLogin.value.password
    );
    // if (this.formularioLogin.valid) {
    //   this.datosCorrectos = true;
    //   this.mostrarCargar = true;
    //   this.loginService
    //     .loginEmailPassword(
    //       this.formularioLogin.value.email,
    //       this.formularioLogin.value.password
    //     )
    //     .then((data) => {
    //       console.log(data);
    //       this.mostrarCargar = false;
    //     })
    //     .catch((error) => {
    //       console.log('Error catch');
    //       this.datosCorrectos = false;
    //       this.mostrarCargar = false;
    //       this.textoError = error.message;
    //     });
    // } else {
    //   this.datosCorrectos = false;
    //   this.mostrarCargar = false;
    //   this.textoError = 'Porfavor revisa que los datos sean correctos';
    // }
  }

  ingresarConGoogle() {
    this.loginService.loginGoogle();
  }

  recuperarPassword() {
    this.loginService
      .recuperarPassword(this.formularioLogin.value.email)
      .then(() => {
        alert(
          'Se ha enviado un correo a su cuenta. Porfavor siga los pasos indicados'
        );
      });
  }
}
