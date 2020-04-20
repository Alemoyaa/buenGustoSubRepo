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
    domicilio: {
      id: 0,
      calle: '',
      localidad: '',
      numero: null,
    },
  };

  constructor(private afsAuth: AngularFireAuth, private route: Router) {}

  //me traigo los datos que me da google
  datosGoogle(clienta: Cliente) {
    this.isAuth().subscribe((cliente) => {
      if (cliente) {
        clienta.nombre = cliente.displayName;
        clienta.email = cliente.email;
        clienta.foto = cliente.photoURL;
        this.providerId = cliente.providerData[0].providerId; //hacer ngIf para que solo se guarde con google
      }
    });
  }

  loginGoogle() {
    return new Promise((resolve, reject) => {
      this.afsAuth.signInWithPopup(new auth.GoogleAuthProvider()).then(
        (data) => resolve(console.log('data', data)),
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
              this.logout();
              alert(
                'Se envió un mail de verificación a tu dirección de correo ndeaaaaa'
              );
              this.route.navigate(['login']);
            })
            .catch(function (error) {})
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
