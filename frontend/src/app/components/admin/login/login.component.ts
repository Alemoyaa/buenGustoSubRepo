import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../../../services/loginServices/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // formulario para logear
  formularioLogin: FormGroup;
  mostrarCargar: boolean = false;
  datosCorrectos: boolean = true;
  textoError: string = '';
  constructor(private fb: FormBuilder, private loginservice: LoginService) { }

  ngOnInit(): void {
    this.crearFormularioLogin();
  }


  // crear formulario para logear
  crearFormularioLogin() {
    this.formularioLogin = this.fb.group({
      // validamos el email para que sea requerido y que tenga formato de email,
      // mientras que a la pw solamente le ponemos una validacion de requerimiento
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.required]
    });
  }


  ingresarConEmailPassword() {
    if (this.formularioLogin.valid) {
      this.datosCorrectos = true;
      this.mostrarCargar = true;
      this.loginservice.loginEmailPassword(this.formularioLogin.value.email, this.formularioLogin.value.password).then(
        (data) => {
          console.log(data);
          this.mostrarCargar = false;
        }).catch((error) => {
          this.datosCorrectos = false;
          this.mostrarCargar = false;
          this.textoError = error.message;

        });
    } else {
      this.datosCorrectos = false;
      this.mostrarCargar = false;
      this.textoError = 'Porfavor revisa que los datos sean correctos';
    }
  }

  ingresarConGoogle(){
    this.loginservice.loginGoogle();
  }


  logout(){
    this.loginservice.logout();
  }

}
