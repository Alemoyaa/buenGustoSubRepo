import { CommonService } from './services/serviciosCliente/commonServices/common.service';
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
import { FooterComponent } from './components/cliente/footer/footer.component';
import { DashboardGerenteComponent } from './components/admin/gerente/dashboard-gerente/dashboard-gerente.component';
import { CatalogoCrudComponent } from './components/admin/gerente/dashboardGerenteComponents/catalogo-crud/catalogo-crud.component';
import { StockComponent } from './components/admin/gerente/dashboardGerenteComponents/stock/stock.component';
import { EstadisticasComponent } from './components/admin/gerente/dashboardGerenteComponents/estadisticas/estadisticas.component';
import { CarritoComponent } from './components/cliente/carrito/carrito.component';

// firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuth } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { ArticuloManufacturado } from './entidades/ArticuloManufacturado';

// Formularios
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
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
    FooterComponent,
    DashboardGerenteComponent,
    CatalogoCrudComponent,
    StockComponent,
    EstadisticasComponent,
    CarritoComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [AngularFireAuth, CommonService],
  bootstrap: [AppComponent],
})
export class AppModule {}
