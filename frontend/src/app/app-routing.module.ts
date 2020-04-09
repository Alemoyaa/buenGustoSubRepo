import { PagenotfoundComponent } from './components/dashboard/pagenotfound/pagenotfound.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { HomeComponent } from './components/dashboard/home/home.component';
import { LoginComponent } from './components/auth/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
{ path: 'login', component: LoginComponent },
{ path: 'home', component: HomeComponent },
{ path: 'register', component: RegisterComponent},
{ path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
