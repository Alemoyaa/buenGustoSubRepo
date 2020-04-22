import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBarComponent } from '../mat-snack-bar/mat-snack-bar.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  show:boolean;
  fname = localStorage.getItem('fname');
  lname = localStorage.getItem('lname');
  email = localStorage.getItem('email');
  mobile = localStorage.getItem('mobile');
  address = localStorage.getItem('address');
  constructor(private router:Router,private snackBar: MatSnackBarComponent ) { }
 
  ngOnInit() {
    this.show=false;
  }
 
  logout(){
    this.show=true;
    localStorage.clear();
    this.router.navigate(['/login']);
    this.snackBar.openSnackBar('Logged out Successfully','','green-snackbar');

  }

}
