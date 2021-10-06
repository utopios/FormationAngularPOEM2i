import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  nombre:any=0;
  constructor() { }

  Montrer(){
    console.log(this.nombre);
  }
  ngOnInit(): void {
  }

}
