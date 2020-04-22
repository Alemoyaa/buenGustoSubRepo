import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import axios from 'axios';
import { Router } from '@angular/router';
import { MatSnackBarComponent } from '../mat-snack-bar/mat-snack-bar.component';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  hide = true;
  title = 'Material App';
  page_type="Registration";
  signupForm2:FormGroup;
  FirstName:string="";
  LastName:string="";
  email:string="";
  mobile:string="";
  address:string="";
  password:string="";
  show:boolean;
  constructor(private frmbuilder:FormBuilder,private router: Router, private snackBar: MatSnackBarComponent) {
      this.signupForm2 = frmbuilder.group({
        fname:['',Validators.required],
        lname:['',Validators.required],
        email:['',Validators.required],
        mobile:['',Validators.required],
        address:['',Validators.required],
        password:['',Validators.required],
    });
   }

  ngOnInit() {
    console.log('spinner chaalu');
    this.show=false;
  }

  async PostData(signupForm2:any){
    this.show=true;
    let config = {
      headers: { 'Content-Type': 'application/json','Accept': 'application/json' }
    };
    var datas = this.signupForm2.value;
    var data = JSON.stringify(datas);

    const serv = await axios.post('https://ccnavigator.app/api/angularStore', data, config)
         .then((responses) => {
          console.log(responses);
          var message = responses.data.message;
          if(responses.data.status=="Success"){
            localStorage.setItem('fname',responses.data.result.user_info.first_name);
             localStorage.setItem('lname',responses.data.result.user_info.last_name);
             localStorage.setItem('email',responses.data.result.user_info.email);
             localStorage.setItem('address',responses.data.result.user_info.address);
             localStorage.setItem('mobile',responses.data.result.user_info.mobile);
             this.router.navigate(['/dashboard']);
             this.snackBar.openSnackBar(message,'','green-snackbar');
           }
           else{
            this.snackBar.openSnackBar(message,'','red-snackbar');
          }
            
             
    }).catch(function (error) {
      console.log(error);
      this.snackBar.openSnackBar(error,'','red-snackbar');
  })
  .then(function () {
    // console.log('always');
    
  });
  this.show=false;
  }

}
