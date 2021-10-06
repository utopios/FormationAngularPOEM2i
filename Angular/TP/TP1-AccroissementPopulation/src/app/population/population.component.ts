import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-population',
  templateUrl: './population.component.html',
  styleUrls: ['./population.component.css']
})
export class PopulationComponent implements OnInit {

  title: string = "TP-1 Accroissement de la Population";
  nbhabitant: number = 96809;
  date: number = 2015;
  nbAnnee: number = 0;
  taux: number = 0.89;
  result:any="";

  constructor() { }

  ngOnInit(): void {
  }

  Calculer(){
    // Boucle while
    while (this.nbhabitant < 120000) {

      this.nbhabitant += this.nbhabitant * (this.taux / 100);

      //console.log(`\tEn ${++this.date}, il y aura ${Math.round(this.nbhabitant)} habitants`);
      this.result += `<li>En ${++this.date}, il y aura ${Math.round(this.nbhabitant)} habitants</li>`;
      //console.log(this.result);
      this.nbhabitant=Math.round(this.nbhabitant);
      this.nbAnnee++;
    }
  }
}
