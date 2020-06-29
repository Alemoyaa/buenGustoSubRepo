import { ExcelService } from './services/excelServices/excel.service';
import { CatalogoDetalleComponent } from './components/cliente/catalogo-detalle/catalogo-detalle.component';
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

import { StockComponent } from './components/admin/dashboard/Admin/stock/stock.component';
import { EstadisticasComponent } from './components/admin/dashboard/Admin/estadisticas/estadisticas.component';
import { FacturaDetalleComponent } from './components/cliente/factura-detalle/factura-detalle.component';
import { PedidosDetalleComponent } from './components/cliente/pedidos-detalle/pedidos-detalle.component';
import { ArtStockMinimoComponent } from './components/admin/dashboard/Admin/estadisticas/art-stock-minimo/art-stock-minimo.component';
import { RecaudacionTiempoComponent } from './components/admin/dashboard/Admin/estadisticas/recaudacion-tiempo/recaudacion-tiempo.component';
import { PedidosPorClienteComponent } from './components/admin/dashboard/Admin/estadisticas/pedidos-por-cliente/pedidos-por-cliente.component';
import { MostrarDomicilioComponent } from './components/admin/dashboard/Admin/usuarios/modales/mostrar-domicilio/mostrar-domicilio.component';
import { FormularioRolComponent } from './components/admin/dashboard/Admin/usuarios/modales/formulario-rol/formulario-rol.component';

import { MenuPlatosComponent } from './components/admin/dashboard/Admin/crud-platos/menu-platos/menu-platos.component';
import { UnidadMedidaPlatosComponent } from './components/admin/dashboard/Admin/crud-platos/unidad-medida-platos/unidad-medida-platos.component';
import { CategoriaPlatosComponent } from './components/admin/dashboard/Admin/crud-platos/categoria-platos/categoria-platos.component';
import { ArtManufacturadoPlatosComponent } from './components/admin/dashboard/Admin/crud-platos/art-manufacturado-platos/art-manufacturado-platos.component';
//cocinero

import { GestorOrdenesCocineroComponent } from './components/admin/dashboard/Cocinero/gestor-ordenes-cocinero/gestor-ordenes-cocinero.component';
import { ModalFacturaComponent } from './components/admin/dashboard/Cajero/facturacion-cajero/modal-factura/modal-factura.component';
import { ModalPlatosComponent } from './components/admin/dashboard/Admin/crud-platos/modal-platos/modal-platos.component';

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
    FacturaDetalleComponent,
    PedidosDetalleComponent,
    ArtStockMinimoComponent,
    RecaudacionTiempoComponent,
    PedidosPorClienteComponent,
    MostrarDomicilioComponent,
    FormularioRolComponent,
    MenuPlatosComponent,
    UnidadMedidaPlatosComponent,
    CategoriaPlatosComponent,
    ArtManufacturadoPlatosComponent,
    ModalFacturaComponent,
    ModalPlatosComponent,
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
  providers: [AngularFireAuth, CommonService, ExcelService],
  bootstrap: [AppComponent],
  schemas: [],
})
export class AppModule {}
