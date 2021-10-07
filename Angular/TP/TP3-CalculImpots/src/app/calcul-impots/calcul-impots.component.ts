import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calcul-impots',
  templateUrl: './calcul-impots.component.html',
  styleUrls: ['./calcul-impots.component.css']
})
export class CalculImpotsComponent implements OnInit {
  // Déclaration variables
  revenus: any;
  nbAdulte: any;
  nbEnfants: any;
  nbParts: number = 0;
  revenuImposable: number = 0;
  montantImpot: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  CalculNbParts = (): number => {
    return this.nbEnfants <= 2 ? this.nbAdulte + this.nbEnfants * 0.5 : this.nbAdulte + this.nbEnfants - 1;
  }

  CalculerImpots = (): void => {
    // Calcul du nombre de parts du foyer 
    this.nbParts = this.CalculNbParts();
    // Calcul du montant imposable
    this.revenuImposable = this.revenus / this.nbParts;
    // Etablissement Structure SwitchCase pour calculer le montant de l'impôt
    switch (true) {
      case this.revenuImposable >= 10085 && this.revenuImposable <= 25659:
        this.montantImpot = Math.round((this.revenuImposable - 10084) * 0.11); break;
      case this.revenuImposable >= 25711 && this.revenuImposable <= 73369:
        this.montantImpot = Math.round((this.revenuImposable - 25710) * 0.3 + 1718.75); break;
      case this.revenuImposable >= 73517 && this.revenuImposable <= 157806:
        this.montantImpot = Math.round((this.revenuImposable - 73516) * 0.41 + 1718.75 + 14341.8); break;
      case this.revenuImposable >= 158123:
        this.montantImpot = Math.round((this.revenuImposable - 158122) * 0.45 + 1718.75 + 14341.8 + 34688.46); break;
    }

    this.montantImpot = this.montantImpot * this.nbParts;
  }

}
