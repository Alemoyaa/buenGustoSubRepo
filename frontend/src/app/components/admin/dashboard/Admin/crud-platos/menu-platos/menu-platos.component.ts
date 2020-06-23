import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-platos',
  templateUrl: './menu-platos.component.html',
  styleUrls: ['./menu-platos.component.css'],
})
export class MenuPlatosComponent implements OnInit {
  valorSelected: number = 0;

  constructor() {}

  ngOnInit(): void {}
}
