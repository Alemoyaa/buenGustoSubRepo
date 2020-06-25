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

  // usuario: Cliente = new Cliente();

  clientePost: Cliente = new Cliente();
  usuarioPost: Usuario = new Usuario();
  constructor(
    private afsAuth: AngularFireAuth,
    private route: Router,
    private cServicio: ClienteService,
    private usuarioService: UsuarioServices
  ) {
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

  async loginGoogle() {
    // return new Promise((resolve, reject) => {
    //   this.afsAuth.signInWithPopup(new auth.GoogleAuthProvider()).then(
    //     (data) => {
    //       if (!this.checkEmailExists(data.user.email)) {
    //         this.setearClienteConIsAuth();
    //       }
    //       console.log('data', data);
    //       let uidCliente = data.user.uid;

    //       this.cServicio.getByUidFirebase(uidCliente).subscribe((data) => {
    //         this.usuario = data;
    //         this.route.navigate(['user-profile/' + data.usuario.uid_firebase]);
    //       });
    //     },
    //     (error) => reject(error)
    //   );
    // });
  }

  loginEmailPassword(email: string, password: string) {

    this.afsAuth.signInWithEmailAndPassword(email, password);

    // if (this.checkEmailExists(email)) {
    //   return new Promise((resolve, reject) => {
    //     this.afsAuth
    //       .signInWithEmailAndPassword(email, password)
    //       .then((res) => {
    //         if (res.user.emailVerified !== true) {
    //           this.logout();
    //           alert('Verifica tu mail');
    //           window.location.reload();
    //         } else {
    //           this.route.navigate(['user-profile']);
    //         }
    //       })
    //       .catch((err) => {
    //         console.log(err);
    //         alert('Datos incorrectos');
    //         window.location.reload();
    //       });
    //   });
    // } else {
    //   this.route.navigate(['register']);
    // }
  }

  async checkEmailExists(email) {
    await this.cServicio.getByEmail(email).subscribe((data) => {
      if (data) {
        return true;
      } else {
        return false;
      }
    });
  }

  register(email: string, password: string) {

    this.afsAuth.createUserWithEmailAndPassword(email, password).then(data => {
      this.postCliente(data);
      console.log();
    });

    // if (this.checkEmailExists(email)) {
    //   this.route.navigate(['login']);
    // } else {
    //   console.log('Else de register');
    //   return new Promise((resolve, reject) => {
    //     this.afsAuth
    //       .createUserWithEmailAndPassword(email, password)
    //       .then((data) =>
    //         data.user
    //           .sendEmailVerification()
    //           .then(async () => {
    //             console.log('.then sendEmailVerification');
    //             await this.setearClienteConIsAuth();
    //             alert(
    //               'Se envió un mail de verificación a tu dirección de correo'
    //             );
    //           })
    //           .then(async () => {
    //             await this.afsAuth.signOut();
    //           })
    //           .catch((error) => {
    //             console.log('Error de promesa');
    //             console.error(error);
    //           })
    //           .finally(() => {
    //             this.route.navigate(['login']);
    //           })
    //       );
    //   });
    // }
  }

  async setearClienteConIsAuth() {
    await this.isAuth().subscribe(
      (data) => {
        this.postCliente(data);
      },
      (error) => {
        console.log('Error en postUser', error);
      },
      async () => {
        console.log('Cliente complete' + this.clientePost);
      }
    );
  }

  async postCliente(data) {

    if (!data) {
      throw new Error('Error post: No data');
    }
    console.log(data.user.email);
    this.usuarioPost.email = data.user.email;
    this.usuarioPost.uid_firebase = data.user.uid;
    this.usuarioPost.rol = new Rol();
    this.usuarioPost.rol.id = 5;
    this.usuarioPost.rol.nombreRol = "Cliente";
    console.log(this.usuarioPost);
    await this.usuarioService.post(this.usuarioPost).subscribe(usuario => {
      
      this.clientePost.usuario = usuario;

      this.clientePost.nombre = '';
      this.clientePost.apellido = '';
      this.clientePost.telefono = 0;
      this.clientePost.domicilio = null;
      console.log(this.clientePost);
      this.cServicio.post(this.clientePost).subscribe(
        (post) => {
          console.log(this.clientePost);
          console.log('Cliente posteado', post);

        },
        (error) => {

          console.log('Error -->', error.message);
        }


      );
    });


    // this.clientePost.usuario.id = 0,
    // this.clientePost.usuario.email = "la puta q te re mil pario charang";
    // this.clientePost.usuario.uid_firebase = "la puta q te re mil pario charang";
    // this.clientePost.usuario.rol.id = 5;

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
