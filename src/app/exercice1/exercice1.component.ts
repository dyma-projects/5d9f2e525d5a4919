import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css']
})
export class Exercice1Component implements OnInit {
  imageLink : string = 'https://www.destinationcocktails.fr/wp-content/uploads/recipes/232_tequilasunrise.jpg';
  name : string = "Tequila Sunrise";

  constructor() { }

  ngOnInit() {
  }

  clickEvent = () => {
    alert('clicked');
  }

}
