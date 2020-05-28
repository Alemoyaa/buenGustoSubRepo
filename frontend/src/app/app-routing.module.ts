import { CatalogoDetalleComponent } from './components/cliente/catalogo-detalle/catalogo-detalle.component';
import { FacturaComponent } from './components/cliente/factura/factura.component';
import { PedidosComponent } from './components/cliente/pedidos/pedidos.component';
import { CarritoComponent } from './components/cliente/carrito/carrito.component';
import { UserProfileComponent } from './components/cliente/user-profile/user-profile.component';
import { RegisterComponent } from './components/admin/register/register.component';
import { LoginComponent } from './components/admin/login/login.component';
import { NotfoundComponent } from './components/cliente/notfound/notfound.component';
import { NavbarComponent } from './components/cliente/navbar/navbar.component';
import { CatalogoComponent } from './components/cliente/catalogo/catalogo.component';
import { HomeComponent } from './components/cliente/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'catalogo', component: CatalogoComponent },
  { path: 'catalogo-detalle/:id', component: CatalogoDetalleComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'user-profile/:id', component: UserProfileComponent },
  { path: 'carrito', component: CarritoComponent },
  { path: 'pedido/:id', component: PedidosComponent },
  { path: 'factura/:id', component: FacturaComponent },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
