import { Router } from '@angular/router';
import { LoginService } from './../../../../services/loginServices/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-cocinero',
  templateUrl: './dashboard-cocinero.component.html',
  styleUrls: ['./dashboard-cocinero.component.css'],
})
export class DashboardCocineroComponent implements OnInit {
  constructor(private loginService: LoginService, private route: Router) {}

  username;
  photo;

  ngOnInit(): void {}

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
