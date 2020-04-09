import { PagenotfoundComponent } from "./components/client/pagenotfound/pagenotfound.component";
import { RegisterComponent } from "./components/auth/register/register.component";
import { HomeComponent } from "./components/client/home/home.component";
import { LoginComponent } from "./components/auth/login/login.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "**", component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
