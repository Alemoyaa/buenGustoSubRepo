import { PedidosDetalleComponent } from './components/cliente/pedidos-detalle/pedidos-detalle.component';
import { FacturaDetalleComponent } from './components/cliente/factura-detalle/factura-detalle.component';
import { EstadisticasComponent } from './components/admin/dashboard/Admin/estadisticas/estadisticas.component';
import { StockComponent } from './components/admin/dashboard/Admin/stock/stock.component';
import { CatalogoDetalleComponent } from './components/cliente/catalogo-detalle/catalogo-detalle.component';
import { FacturaComponent } from './components/cliente/factura/factura.component';
import { PedidosComponent } from './components/cliente/pedidos/pedidos.component';
import { CarritoComponent } from './components/cliente/carrito/carrito.component';
import { UserProfileComponent } from './components/cliente/user-profile/user-profile.component';
import { RegisterComponent } from './components/admin/register/register.component';
import { LoginComponent } from './components/admin/login/login.component';
import { NotfoundComponent } from './components/cliente/notfound/notfound.component';
import { CatalogoComponent } from './components/cliente/catalogo/catalogo.component';
import { HomeComponent } from './components/cliente/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuariosComponent } from './components/admin/dashboard/Admin/usuarios/usuarios.component';
import { CrudPlatosComponent } from './components/admin/dashboard/Admin/crud-platos/crud-platos.component';
import { NuevoClienteCajeroComponent } from './components/admin/dashboard/Cajero/nuevo-cliente-cajero/nuevo-cliente-cajero.component';
import { NuevoPedidoCajeroComponent } from './components/admin/dashboard/Cajero/nuevo-pedido-cajero/nuevo-pedido-cajero.component';
import { PedidosCajeroComponent } from './components/admin/dashboard/Cajero/pedidos-cajero/pedidos-cajero.component';
import { FacturacionCajeroComponent } from './components/admin/dashboard/Cajero/facturacion-cajero/facturacion-cajero.component';
import { BajasStockCocineroComponent } from './components/admin/dashboard/Cocinero/bajas-stock-cocinero/bajas-stock-cocinero.component';
import { GestorOrdenesCocineroComponent } from './components/admin/dashboard/Cocinero/gestor-ordenes-cocinero/gestor-ordenes-cocinero.component';

const routes: Routes = [
  // Vistas usuario
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'catalogo', component: CatalogoComponent },
  { path: 'catalogo-detalle/:id', component: CatalogoDetalleComponent },
  { path: 'user-profile/:id', component: UserProfileComponent },
  { path: 'carrito', component: CarritoComponent },
  { path: 'pedido/:id', component: PedidosDetalleComponent },
  { path: 'factura/:id', component: FacturaDetalleComponent },
  //  vistas de administrador / cajero / cocinero : Faltan hacer los Guards
  // El administrador deberiaa poder ver todas (lasa de admin, cajero y cocinero)
  // { path: 'dashboard', component: DashboardComponent },
  { path: 'dashboard/admin/gestionEmpleados', component: UsuariosComponent },
  { path: 'dashboard/admin/gestionStock', component: StockComponent },
  {
    path: 'dashboard/admin/gestionArticulos',
    component: CrudPlatosComponent,
  },
  { path: 'dashboard/admin/estadisticas', component: EstadisticasComponent },
  // vistas cajero
  {
    path: 'dashboard/admin/cajero/nuevoCliente',
    component: NuevoClienteCajeroComponent,
  },
  {
    path: 'dashboard/admin/cajero/nuevoPedido',
    component: NuevoPedidoCajeroComponent,
  },
  {
    path: 'dashboard/admin/cajero/administracionDePedidos',
    component: PedidosCajeroComponent,
  },
  {
    path: 'dashboard/admin/cajero/administracionFacturacion',
    component: FacturacionCajeroComponent,
  },
  // vistas cocinero
  {
    path: 'dashboard/admin/cocinero/gestorOrdenes',
    component: GestorOrdenesCocineroComponent,
  },
  {
    path: 'dashboard/admin/cocinero/bajasManualesDeStock',
    component: BajasStockCocineroComponent,
  },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
