import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import axios from 'axios';
import { Router } from '@angular/router';
import { MatSnackBarComponent } from '../mat-snack-bar/mat-snack-bar.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;
  title = 'Material App';
  page_type = "Registration";
  signupForm: FormGroup;
  email: string = "";
  password: string = "";
  show:boolean;

 constructor(private frmbuilder: FormBuilder, private router: Router, private snackBar: MatSnackBarComponent ) {

    this.signupForm = frmbuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]

    });
  }

  ngOnInit() {
    this.show= false;
    
  }


  async PostData(signupForm: any) {
    
    //var server = "http://quitsmoking.srmtechsol.com/public/api";
    //var local = "http://localhost/shantanu/quitsmoking/public/api";
    //var Love = "https://ccnavigator.app/api";
    //var webhost = "https://shanthedeveloper.000webhostapp.com/index.php"
    this.show=true;
    let config = {
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }
    };
    var datas = { "email": this.signupForm.value['email'], "password": this.signupForm.value['password']};
    var data = JSON.stringify(datas);

    const serv = await axios.post('https://ccnavigator.app/api/reactLogin', data, config)
      .then((response) => {

        var message = response.data.message;
        if (response.data.status == "Success") {
          localStorage.setItem('fname', response.data.result[0].first_name);
          localStorage.setItem('lname', response.data.result[0].last_name);
          localStorage.setItem('email', response.data.result[0].email);
          localStorage.setItem('address', response.data.result[0].address);
          localStorage.setItem('mobile', response.data.result[0].mobile);
          
          this.snackBar.openSnackBar(message,'','green-snackbar');
          this.router.navigate(['/dashboard']);

        }
        else {
          this.snackBar.openSnackBar(message,'','red-snackbar');
        }
       

        console.log(response);
      }).catch(function (error) {
        console.log(error);
        this.snackBar.openSnackBar(error,'','red-snackbar');
      })
      .then(function () {
        
        console.log('always');

      });
      this.show=false;
  }

}
