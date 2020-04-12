import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/admin/login/login.component';
import { RegisterComponent } from './components/admin/register/register.component';
import { HomeComponent } from './components/cliente/home/home.component';
import { NavbarComponent } from './components/cliente/navbar/navbar.component';
import { NotfoundComponent } from './components/cliente/notfound/notfound.component';
import { UserProfileComponent } from './components/cliente/user-profile/user-profile.component';
import { CatalogoComponent } from './components/cliente/catalogo/catalogo.component';
import { OfertasComponent } from './components/cliente/ofertas/ofertas.component';
import { FooterComponent } from './components/cliente/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    NavbarComponent,
    NotfoundComponent,
    UserProfileComponent,
    CatalogoComponent,
    OfertasComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
