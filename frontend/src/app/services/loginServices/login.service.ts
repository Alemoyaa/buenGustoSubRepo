import { ClienteService } from './../serviciosCliente/clienteServices/cliente.service';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { Usuario } from '../../entidades/Usuario';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { auth } from 'firebase/app';
@Injectable({
  providedIn: 'root',
})
export class LoginService {
  public providerId: string = 'null';

  cliente: Usuario = new Usuario();
  // =
  // {
  //   id: 0,
  //   nombre: '',
  //   apellido: '',
  //   telefono: null,
  //   email: '',
  //   foto: '',
  //   uidFirebase: '',
  //   rol: {
  //     id: 0,
  //     nombreRol : '',
  //     descripcion: ''
  //   },
  // };

  constructor(
    private afsAuth: AngularFireAuth,
    private route: Router,
    private clienteService: ClienteService
  ) {}

  //me traigo los datos que me da google
  datosGoogle(cliente: Usuario) {
    this.isAuth().subscribe((user) => {
      if (user) {
        cliente.uid_firebase = user.uid;
        cliente.email = user.email;
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

          this.clienteService.getByUidFirebase(uidCliente).subscribe((data) => {
            console.log(data);
          });

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
