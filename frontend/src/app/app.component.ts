import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  mostrar: boolean;

  ngOnInit(): void {

    

  }

  // este metodo setea los datos recibidos por los componentes hijos (navbar y dashboard)
  //  y segun el resultadomuestra uno u otro
  mostrarDashboard(event) {
    this.mostrar = event;
    
  }
}

