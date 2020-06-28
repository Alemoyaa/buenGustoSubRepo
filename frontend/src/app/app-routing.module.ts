import { MenuPlatosComponent } from './components/admin/dashboard/Admin/crud-platos/menu-platos/menu-platos.component';
import { PedidosPorClienteComponent } from './components/admin/dashboard/Admin/estadisticas/pedidos-por-cliente/pedidos-por-cliente.component';
import { PedidosDetalleComponent } from './components/cliente/pedidos-detalle/pedidos-detalle.component';
import { FacturaDetalleComponent } from './components/cliente/factura-detalle/factura-detalle.component';
import { EstadisticasComponent } from './components/admin/dashboard/Admin/estadisticas/estadisticas.component';
import { StockComponent } from './components/admin/dashboard/Admin/stock/stock.component';
import { CatalogoDetalleComponent } from './components/cliente/catalogo-detalle/catalogo-detalle.component';
import { CarritoComponent } from './components/cliente/carrito/carrito.component';
import { UserProfileComponent } from './components/cliente/user-profile/user-profile.component';
import { RegisterComponent } from './components/admin/register/register.component';
import { LoginComponent } from './components/admin/login/login.component';
import { NotfoundComponent } from './components/cliente/notfound/notfound.component';
import { CatalogoComponent } from './components/cliente/catalogo/catalogo.component';
import { HomeComponent } from './components/cliente/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { UsuariosComponent } from './components/admin/dashboard/Admin/usuarios/usuarios.component';
import { PedidosCajeroComponent } from './components/admin/dashboard/Cajero/pedidos-cajero/pedidos-cajero.component';
import { FacturacionCajeroComponent } from './components/admin/dashboard/Cajero/facturacion-cajero/facturacion-cajero.component';
import { GestorOrdenesCocineroComponent } from './components/admin/dashboard/Cocinero/gestor-ordenes-cocinero/gestor-ordenes-cocinero.component';
import { AdminGuard } from './Guard/admin.guard';
import { CajeroGuard } from './Guard/cajero.guard';
import { ClienteGuard } from './Guard/cliente.guard';
import { CocineroGuard } from './Guard/cocinero.guard';
import { CatalogoDetalleInsumoComponent } from './components/cliente/catalogo-detalle-insumo/catalogo-detalle-insumo.component';

const routes: Routes = [
  // Vistas usuario
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'catalogo', component: CatalogoComponent },
  {
    path: 'detalle-manufacturado/:id',
    component: CatalogoDetalleComponent,
  },
  {
    path: 'detalle-insumo/:id',
    component: CatalogoDetalleInsumoComponent,
  },
  {
    path: 'user-profile/:id',
    component: UserProfileComponent,
    canActivate: [/*AdminGuard, CajeroGuard, CocineroGuard, */ ClienteGuard],
  },
  { path: 'carrito', component: CarritoComponent },
  {
    path: 'pedido/:id',
    component: PedidosDetalleComponent,
    canActivate: [/*AdminGuard, CajeroGuard, CocineroGuard, */ ClienteGuard],
  },
  {
    path: 'factura/:id',
    component: FacturaDetalleComponent,
    canActivate: [/*AdminGuard, CajeroGuard, CocineroGuard, */ ClienteGuard],
  },
  //  vistas de administrador / cajero / cocinero : Faltan hacer los Guards
  // El administrador deberiaa poder ver todas (lasa de admin, cajero y cocinero)
  // { path: 'dashboard', component: DashboardComponent },
  {
    path: 'dashboard/admin/gestionEmpleados',
    component: UsuariosComponent,
    canActivate: [AdminGuard],
    //guards: admin
  },
  {
    path: 'dashboard/admin/gestionStock',
    component: StockComponent,
    canActivate: [CocineroGuard],
    //guards: admin, cocinero
  },
  {
    path: 'dashboard/admin/gestionArticulos',
    component: MenuPlatosComponent,
    canActivate: [CocineroGuard],
    //guards: admin, cocinero
  }, //Estadisticas
  {
    path: 'dashboard/admin/estadisticas',
    component: EstadisticasComponent,
    canActivate: [AdminGuard],
    //guards: admin
  },
  {
    path: 'dashboard/admin/estadisticas/cliente',
    component: PedidosPorClienteComponent,
    canActivate: [AdminGuard],
    //guards: admin
  },
  // vistas cajero
  {
    path: 'dashboard/admin/cajero/administracionDePedidos',
    component: PedidosCajeroComponent,
    canActivate: [CajeroGuard],
    //guards: admin, cajero
  },
  {
    path: 'dashboard/admin/cajero/administracionFacturacion',
    component: FacturacionCajeroComponent,
    canActivate: [CajeroGuard],
    //guards: admin, cajero
  },
  // vistas cocinero
  {
    path: 'dashboard/admin/cocinero/gestorOrdenes',
    component: GestorOrdenesCocineroComponent,
    canActivate: [CocineroGuard],
    //guards: admin, cocinero
  },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
