import { UsuarioServices } from './../serviciosCliente/usuarioServices/usuario.services';
import { ClienteService } from './../serviciosCliente/clienteServices/cliente.service';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { Usuario } from '../../entidades/Usuario';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { auth } from 'firebase/app';
import { Cliente } from '../../entidades/Cliente';
import { Rol } from 'src/app/entidades/Rol';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  public providerId: string = 'null';

  clientePost: Cliente = new Cliente();
  usuarioPost: Usuario = new Usuario();
  constructor(
    private afsAuth: AngularFireAuth,
    private route: Router,
    private cServicio: ClienteService,
    private usuarioService: UsuarioServices
  ) {}

  // me traigo los datos que me da google
  datosGoogle(usuario: Usuario) {
    this.isAuth().subscribe((user) => {
      if (user) {
        usuario.uid_firebase = user.uid;
        usuario.email = user.email;
        // this.providerId = user.providerData[0].providerId; //hacer ngIf para que solo se guarde con google
      }
    });
  }

  loginGoogle() {
    this.afsAuth.signInWithPopup(new auth.GoogleAuthProvider()).then((data) => {
      console.log('data', data);
      console.log('dataCredential', data.credential);

      if (this.checkEmailExists(data.user.email)) {
        this.postCliente(data, true);
        this.route.navigate(['user-profile/' + data.user.uid]);
      } else {
        this.route.navigate(['user-profile/' + data.user.uid]);
      }
    });
  }

  loginEmailPassword(email: string, password: string) {
    this.afsAuth.signInWithEmailAndPassword(email, password).then((res) => {
      this.route.navigate(['user-profile/' + res.user.uid]);
    });

    //         if (res.user.emailVerified !== true) {
    //           this.logout();
    //           alert('Verifica tu mail');
    //           window.location.reload();
    //         }

    //        .catch((err) => {
    //         console.log(err);
    //         alert('Datos incorrectos');
    //         window.location.reload();
    //        });
  }

  async checkEmailExists(emailACheckear) {
    await this.usuarioService.getByEmail(emailACheckear).subscribe((data) => {
      return data;
    });
  }

  register(email: string, password: string) {
    if (!this.checkEmailExists(email)) {
      this.route.navigate(['login']);
    } else {
      this.afsAuth
        .createUserWithEmailAndPassword(email, password)
        .then((data) => {
          console.log(data);
          data.user.sendEmailVerification();
          this.postCliente(data, false);
          alert('Se envió un mail de verificación a tu dirección de correo');
        })
        .then(async () => {
          await this.afsAuth.signOut();
        });
    }
  }

  async setearClienteConIsAuth() {
    await this.isAuth().subscribe(
      (data) => {
        this.postCliente(data, false);
      },
      (error) => {
        console.log('Error en postUser', error);
      },
      async () => {
        console.log('Cliente complete' + this.clientePost);
      }
    );
  }

  async postCliente(data, comprobadorDeGoogle: boolean) {
    if (!data) {
      throw new Error('Error post: No data');
    }

    this.usuarioPost = new Usuario();
    this.usuarioPost.email = data.user.email;
    this.usuarioPost.uid_firebase = data.user.uid;
    this.usuarioPost.rol = new Rol();
    this.usuarioPost.rol.id = 5;
    this.usuarioPost.rol.nombreRol = 'Cliente';

    console.log(this.usuarioPost);

    this.clientePost.usuario = new Usuario();
    this.clientePost.usuario = this.usuarioPost;

    if (comprobadorDeGoogle) {
      this.clientePost.nombre = data.additionalUserInfo.profile.given_name;
      this.clientePost.apellido = data.additionalUserInfo.profile.family_name;

      if (data.user.phoneNumber) {
        this.clientePost.telefono = data.user.phoneNumber;
      } else {
        this.clientePost.telefono = 0;
      }
    } else {
      this.clientePost.nombre = '';
      this.clientePost.apellido = '';
      this.clientePost.telefono = 0;
    }

    console.log(this.clientePost);

    await this.cServicio.post(this.clientePost).subscribe(
      (post) => {
        console.log('poss anduvo', post);
      },
      (error) => {
        console.log('Error -->', error.message);
      }
    );
  }

  // Para saber si esta logueado
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
