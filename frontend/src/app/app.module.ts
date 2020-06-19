import { CatalogoDetalleComponent } from './components/cliente/catalogo-detalle/catalogo-detalle.component';
import { CommonService } from './services/serviciosCliente/commonServices/common.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
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
import { CarritoComponent } from './components/cliente/carrito/carrito.component';

// firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuth } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';
import { HttpClientModule } from '@angular/common/http';

// Formularios
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FacturaComponent } from './components/cliente/factura/factura.component';
import { PedidosComponent } from './components/cliente/pedidos/pedidos.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UsuariosComponent } from './components/admin/dashboard/Admin/usuarios/usuarios.component';

import { NgxPaginationModule } from 'ngx-pagination';

// componentes de empleados/admin
import { PedidosCajeroComponent } from './components/admin/dashboard/Cajero/pedidos-cajero/pedidos-cajero.component';
import { FacturacionCajeroComponent } from './components/admin/dashboard/Cajero/facturacion-cajero/facturacion-cajero.component';
import { GestorOrdenesCocineroComponent } from './components/admin/dashboard/Cocinero/gestor-ordenes-cocinero/gestor-ordenes-cocinero.component';
import { BajasStockCocineroComponent } from './components/admin/dashboard/Cocinero/bajas-stock-cocinero/bajas-stock-cocinero.component';
import { CrudPlatosComponent } from './components/admin/dashboard/Admin/crud-platos/crud-platos.component';
import { StockComponent } from './components/admin/dashboard/Admin/stock/stock.component';
import { EstadisticasComponent } from './components/admin/dashboard/Admin/estadisticas/estadisticas.component';
import { FacturaDetalleComponent } from './components/cliente/factura-detalle/factura-detalle.component';
import { PedidosDetalleComponent } from './components/cliente/pedidos-detalle/pedidos-detalle.component';
import { ArtStockMinimoComponent } from './components/admin/dashboard/Admin/estadisticas/art-stock-minimo/art-stock-minimo.component';


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
    CrudPlatosComponent,
    StockComponent,
    EstadisticasComponent,
    CarritoComponent,
    FacturaComponent,
    PedidosComponent,
    CatalogoDetalleComponent,
    UsuariosComponent,
    PedidosCajeroComponent,
    FacturacionCajeroComponent,
    GestorOrdenesCocineroComponent,
    BajasStockCocineroComponent,
    FacturaDetalleComponent,
    PedidosDetalleComponent,
    ArtStockMinimoComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    NgxPaginationModule,
  ],
  providers: [AngularFireAuth, CommonService],
  bootstrap: [AppComponent],
  schemas: [],
})
export class AppModule {}
