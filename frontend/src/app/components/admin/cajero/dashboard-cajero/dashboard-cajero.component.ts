import { Router } from '@angular/router';
import { LoginService } from './../../../../services/loginServices/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-cajero',
  templateUrl: './dashboard-cajero.component.html',
  styleUrls: ['./dashboard-cajero.component.css'],
})
export class DashboardCajeroComponent implements OnInit {
  constructor(private loginService: LoginService, private route: Router) {}

  username;
  photo;

  ngOnInit(): void {}

  tableroPedidos = true;
  tableroFacturacion = false;

  clearBoards() {
    this.tableroPedidos = false;
    this.tableroFacturacion = false;
  }

  setBoard(board) {
    this.clearBoards();
    if (board === 'tableroPedidos') {
      this.tableroPedidos = true;
    }
    if (board === 'tableroFacturacion') {
      this.tableroFacturacion = true;
    }
  }

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
