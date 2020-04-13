import { DashboardGerenteComponent } from './components/admin/gerente/dashboard-gerente/dashboard-gerente.component';
import { CarritoComponent } from './components/cliente/carrito/carrito.component';
import { UserProfileComponent } from './components/cliente/user-profile/user-profile.component';
import { RegisterComponent } from './components/admin/register/register.component';
import { LoginComponent } from './components/admin/login/login.component';
import { OfertasComponent } from './components/cliente/ofertas/ofertas.component';
import { NotfoundComponent } from './components/cliente/notfound/notfound.component';
import { NavbarComponent } from './components/cliente/navbar/navbar.component';
import { CatalogoComponent } from './components/cliente/catalogo/catalogo.component';
import { HomeComponent } from './components/cliente/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'catalogo', component: CatalogoComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'user-profile', component: UserProfileComponent },
  { path: 'ofertas', component: OfertasComponent },
  { path: 'carrito', component: CarritoComponent },
  { path: 'admin/gerente/dashboard', component: DashboardGerenteComponent },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
