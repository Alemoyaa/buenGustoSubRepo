import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/loginServices/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(private loginService: LoginService, private route: Router) {}

  username;
  photo;

  ngOnInit(): void {
    this.getUser();
  }
  // }
  // //Admin
  // tableroPizzaCrud = false;
  // tableroStock = false;
  // tableroEstadisticas = false;
  // tableroUsuario = false;
  // //Cocinero
  // tableroOrdenes = false;
  // tablerosBajasManuales = false;
  // //Cajero
  // tableroPedidos = false;
  // tableroFacturacion = false;

  // clearBoards() {
  //   //Admin
  //   this.tableroPizzaCrud = false;
  //   this.tableroStock = false;
  //   this.tableroEstadisticas = false;
  //   this.tableroUsuario = false;
  //   //Cocinero
  //   this.tableroOrdenes = false;
  //   this.tablerosBajasManuales = false;
  //   //Cajero
  //   this.tableroPedidos = false;
  //   this.tableroFacturacion = false;
  // }

  // setBoard(board) {
  //   this.clearBoards();
  //   if (board === 'tableroPizzaCrud') {
  //     this.tableroPizzaCrud = true;
  //   }
  //   if (board === 'tableroStock') {
  //     this.tableroStock = true;
  //   }
  //   if (board === 'tableroEstadisticas') {
  //     this.tableroEstadisticas = true;
  //   }
  //   if (board === 'tableroUsuario') {
  //     this.tableroUsuario = true;
  //   }
  //   if (board === 'tableroOrdenes') {
  //     this.tableroPedidos = true;
  //   }
  //   if (board === 'tablerosBajasManuales') {
  //     this.tableroFacturacion = true;
  //   }
  //   if (board === 'tableroPedidos') {
  //     this.tableroPedidos = true;
  //   }
  //   if (board === 'tableroFacturacion') {
  //     this.tableroFacturacion = true;
  //   }
  // }

  getUser() {
    this.loginService.isAuth().subscribe((user) => {
      if (!user) {
        this.route.navigate(['login']);
      }
      this.username = user.displayName;
      this.photo = user.photoURL;
    });
  }

  logout() {
    this.loginService.logout();
  }
}
