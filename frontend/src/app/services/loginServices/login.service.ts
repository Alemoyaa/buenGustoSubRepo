import { AlertsService } from './../alertServices/alerts.service';
import { UsuarioServices } from './../serviciosCliente/usuarioServices/usuario.services';
import { ClienteService } from './../serviciosCliente/clienteServices/cliente.service';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { Usuario } from '../../entidades/Usuario';
import { Injectable, EventEmitter } from '@angular/core';
import { map } from 'rxjs/operators';
import { auth } from 'firebase/app';
import { Cliente } from '../../entidades/Cliente';
import { Rol } from 'src/app/entidades/Rol';
import { Domicilio } from 'src/app/entidades/Domicilio';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  public providerId: string = 'null';

  public logueado = false;
  public logged: EventEmitter<boolean>;

  clientePost: Cliente = new Cliente();
  usuarioPost: Usuario = new Usuario();
  constructor(
    private afsAuth: AngularFireAuth,
    private route: Router,
    private cServicio: ClienteService,
    private usuarioService: UsuarioServices,
    private alertSweet: AlertsService
  ) {
    this.logged = new EventEmitter();
  }

  public ingresar(): void {
    console.log('Sesion iniciada');
    this.logueado = true;
    this.logged.emit(true);
  }

  public salir(): void {
    console.log('Sesion cerrada');
    this.logueado = false;
    this.logged.emit(false);
    this.route.navigate(['/']);
  }

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
      this.usuarioService.getByEmail(data.user.email).subscribe(
        respuesta => {
           if (respuesta === true) {
        console.log('if');

        this.route.navigate(['user-profile/' + data.user.uid]);

       // this.postCliente(data, true);
      } else {
        console.log('else');
        console.log('data', data.user.uid);
        this.postCliente(data, true);
        this.route.navigate(['user-profile/' + data.user.uid]);

      }
        }
      );

    });
  }

  loginEmailPassword(email: string, password: string) {
    this.afsAuth.signInWithEmailAndPassword(email, password).then(
      (res) => {
        this.ingresar();
        this.route.navigate(['catalogo']);
      },
      (err) => {
        console.error(err);
      }
    );

  }

  async checkEmailExists(emailACheckear) {
    await this.usuarioService.getByEmail(emailACheckear).subscribe((data) => {
      console.log(data);
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
          //console.log(data);
          this.logout();
          data.user.sendEmailVerification();
          this.postCliente(data, false);
          //alert('Se envió un mail de verificación a tu dirección de correo');
        })
        .then(async () => {
          await this.afsAuth.signOut();
        });
    }
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

    //console.log(this.clientePost);

    await this.cServicio.post(this.clientePost).subscribe(
      (post) => {
        this.alertSweet.mensajeSuccessTimer(
          'Verifica tu cuenta',
          'Fue enviado un email de verificacion',
          3000
        );
        //console.log('poss anduvo', post);
      },
      (error) => {
        this.alertSweet.mensajeError('Error', error);
        //console.log('Error -->', error.message);
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
    this.salir();
    this.afsAuth.signOut();
  }
}
