import { NotfoundComponent } from './components/cliente/notfound/notfound.component';
import { UserProfileComponent } from './components/cliente/userProfile/userProfile.component';
import { OfertasComponent } from './components/cliente/ofertas/ofertas.component';
import { CatalogoComponent } from './components/cliente/catalogo/catalogo.component';
import { HomeComponent } from './components/cliente/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [

  {path: '', component: HomeComponent},
  {path: 'catalogo', component: CatalogoComponent},
  {path: 'ofertas', component: OfertasComponent},
  {path: 'userProfile:/id', component: UserProfileComponent},
  {path: '**', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
