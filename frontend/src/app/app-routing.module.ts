import { OfertasComponent } from './components/cliente/ofertas/ofertas.component';
import { NotfoundComponent } from './components/cliente/notfound/notfound.component';
import { NavbarComponent } from './components/cliente/navbar/navbar.component';
import { CatalogoComponent } from './components/cliente/catalogo/catalogo.component';
import { HomeComponent } from './components/cliente/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path:'', component: HomeComponent },
  { path:'catalogo', component: CatalogoComponent },
  { path:'navbar', component: NavbarComponent },
  { path:'ofertas', component: OfertasComponent },
  { path:'**', component: NotfoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
