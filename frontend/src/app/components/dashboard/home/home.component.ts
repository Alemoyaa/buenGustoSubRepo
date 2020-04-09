import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  public posts: {
    id: string;
    titlePost: string;
    contentPost: string;
    imagePost: string;
  }[] = [
    {
      id: '1',
      titlePost: 'PostOne',
      contentPost: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
       sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam`,

      imagePost: 'https://i.blogs.es/9c5ee0/pizza-cebolla/1366_2000.jpg'
    },
    {
      id: '2',
      titlePost: 'PostTwo',
      contentPost: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
       sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam`,

      imagePost: 'https://media-cdn.tripadvisor.com/media/photo-s/0e/0a/27/05/pizza-especial-salsa.jpg'
    },
    {
      id: '3',
      titlePost: 'Post 3',
      contentPost: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
       sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam`,

      imagePost: 'https://image.freepik.com/foto-gratis/rebanada-cortada-clasica-pizza-pepperoni-rollos-pimiento-verde_114579-1963.jpg'
    },
    {
      id: '4',
      titlePost: 'Post4',
      contentPost: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
       sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam`,

      imagePost: 'https://upload.wikimedia.org/wikipedia/commons/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
