import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LoginService } from 'src/app/services/loginServices/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(private loginService: LoginService, private route: Router) {}
  mostrar: boolean = false;
  username;
  photo;
  @Output()  irDashboard = new EventEmitter();

  ngOnInit(): void {
    this.getUser();
    this.irDashboard.emit(true);
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

  // sirve para mostrar una bienvenida al administrador
  // o la ruta seleccionada en la dashboard
  mostrarTrue(){
    this.mostrar = true;
  }

  // recibimos el click de el usuario y se lo enviamos al componente padre para irnos devuelta a 
  // la navbar
  irAdmin(event){
    this.irDashboard.emit(false);
  }

}
