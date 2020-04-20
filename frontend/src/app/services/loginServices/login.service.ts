import { ClienteService } from './../serviciosCliente/clienteServices/cliente.service';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { Cliente } from './../../entidades/Cliente';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { auth } from 'firebase/app';
@Injectable({
  providedIn: 'root',
})
export class LoginService {
  public providerId: string = 'null';
  cliente: Cliente = {
    id: 0,
    nombre: '',
    apellido: '',
    telefono: null,
    email: '',
    foto: '',
    uidFirebase: '',
    domicilio: {
      id: 0,
      calle: '',
      localidad: '',
      numero: null,
    },
  };

  constructor(
    private afsAuth: AngularFireAuth,
    private route: Router,
    private clienteService: ClienteService
  ) {}

  //me traigo los datos que me da google
  datosGoogle(cliente: Cliente) {
    this.isAuth().subscribe((user) => {
      if (user) {
        cliente.nombre = user.displayName;
        cliente.apellido = user.displayName;
        cliente.email = user.email;
        cliente.foto = user.photoURL;
        cliente.uidFirebase = user.uid;
        //this.providerId = user.providerData[0].providerId; //hacer ngIf para que solo se guarde con google
      }
    });
  }

  async loginGoogle() {
    let idDelCliente = 0;
    return new Promise((resolve, reject) => {
      this.afsAuth.signInWithPopup(new auth.GoogleAuthProvider()).then(
        (data) => {
          console.log('data', data);
          let uidCliente = data.user.uid;

          this.clienteService.getByUidFirebase(uidCliente).subscribe((data)=>{
            console.log(data);
          })

          this.route.navigate(['user-profile']);
        },
        (error) => reject(error)
      );
    });
  }

  loginEmailPassword(email: string, password: string) {
    return new Promise((resolve, reject) => {
      this.afsAuth
        .signInWithEmailAndPassword(email, password)
        .then((res) => {
          if (res.user.emailVerified !== true) {
            this.logout();
            alert('Verifica tu mail');
            window.location.reload();
          } else {
            this.route.navigate(['user-profile']);
          }
        })
        .catch((err) => {
          console.log(err);
          alert('Datos incorrectos');
          window.location.reload();
        });
    });
  }

  register(email: string, password: string) {
    return new Promise((resolve, reject) => {
      this.afsAuth
        .createUserWithEmailAndPassword(email, password)
        .then((data) =>
          data.user
            .sendEmailVerification()
            .then(function () {
              alert(
                'Se envió un mail de verificación a tu dirección de correo'
              );
            })
            .then(() => {
              this.afsAuth.signOut();
            })
            .catch(function (error) {
              console.log(error);
            })
            .finally(() => {
              this.route.navigate(['login']);
            })
        );
    });
  }

  //Para saber si esta logueado
  isAuth() {
    return this.afsAuth.authState.pipe(map((auth) => auth));
  }

  recuperarPassword(email: string) {
    return this.afsAuth.sendPasswordResetEmail(email);
  }

  logout() {
    this.afsAuth.signOut();
  }
}
