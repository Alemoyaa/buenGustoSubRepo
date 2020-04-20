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

  constructor(private fb: FormBuilder, private loginService: LoginService) {}

  ngOnInit(): void {
    this.crearFormularioRegister();
  }

  // crear formulario para logear
  crearFormularioRegister() {
    this.formularioRegister = this.fb.group({
      // validamos el email para que sea requerido y que tenga formato de email,
      // mientras que a la pw solamente le ponemos una validacion de requerimiento
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.required],
    });
  }

  registrarConMailPassword() {
    if (this.formularioRegister.valid) {
      this.datosCorrectos = true;
      this.mostrarCargar = true;
      this.loginService
        .register(
          this.formularioRegister.value.email,
          this.formularioRegister.value.password
        )
        .then((data) => {
          this.mostrarCargar = false;
        })
        .catch((error) => {
          this.datosCorrectos = false;
          this.mostrarCargar = false;
          this.textoError = error.message;
        });
    } else {
      this.datosCorrectos = false;
      this.mostrarCargar = false;
      this.textoError = 'Por favor revisa que los datos sean correctos';
    }
  }

  ingresarConGoogle() {
    this.loginService.loginGoogle();
  }
}
