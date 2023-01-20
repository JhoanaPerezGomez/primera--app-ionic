import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page  implements OnInit{

  constructor() {}

  ngOnInit(): void {
    console.log("Hola mundo en IONIC");

    debugger;
     let numero = 20;
     numero = 10;
     numero = 15;
     numero =100;

     console.log("L a variable esta tomando este valor:" +numero);
  }

}
