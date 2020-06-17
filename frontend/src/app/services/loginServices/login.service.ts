import { UsuarioServices } from './../serviciosCliente/usuarioServices/usuario.services';
import { ClienteService } from './../serviciosCliente/clienteServices/cliente.service';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { Usuario } from '../../entidades/Usuario';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { auth } from 'firebase/app';
import { Cliente } from '../../entidades/Cliente';
@Injectable({
  providedIn: 'root',
})
export class LoginService {
  public providerId: string = 'null';

  usuario: Cliente = new Cliente();
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
    private cServicio: ClienteService
  ) {}

  //me traigo los datos que me da google
  datosGoogle(usuario: Usuario) {
    this.isAuth().subscribe((user) => {
      if (user) {
        usuario.uid_firebase = user.uid;
        usuario.email = user.email;
        //this.providerId = user.providerData[0].providerId; //hacer ngIf para que solo se guarde con google
      }
    });
  }

  async loginGoogle() {
    return new Promise((resolve, reject) => {
      this.afsAuth.signInWithPopup(new auth.GoogleAuthProvider()).then(
        (data) => {
          console.log('data', data);
          let uidCliente = data.user.uid;

          this.cServicio.getByUidFirebase(uidCliente).subscribe((data) => {
            this.usuario = data;
            this.route.navigate(['user-profile/' + data.usuario.uid_firebase]);
          });
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
