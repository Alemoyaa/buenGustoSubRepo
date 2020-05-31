import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'frontend';
  mostrar: boolean = false;

  ngOnInit(): void {

    alert(this.mostrar);

  }

  // este metodo setea los datos recibidos por los componentes hijos (navbar y dashboard)
  //  y segun el resultadomuestra uno u otro
  mostrarDashboard(event) {
    this.mostrar = event;
    alert(this.mostrar);
  }
}

