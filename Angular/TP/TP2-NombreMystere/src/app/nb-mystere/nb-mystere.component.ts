import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-nb-mystere',
  templateUrl: './nb-mystere.component.html',
  styleUrls: ['./nb-mystere.component.css']
})
export class NbMystereComponent implements OnInit {
  title = 'TP2-NombreMystere';
  nbUser: any;
  nbMystere: any;
  nbCoups: any = 0;
  ligne1: any;
  ligne2: any;
  trouve: boolean = false;
  affichage: string = `<h2>Le nombre mystère</h2><br><hr>`;

  constructor() { }

  ngOnInit(): void {
    this.start();
  }

  start = () => {
    // Génération d'un nombre Aléatoire
    this.nbMystere = Math.floor(Math.random() * (50 - 1)) + 1;
    //console.log("nbMystere = " + this.nbMystere)
    // Initialisation des valeurs
    this.ligne1 = "J'ai généré un nombre entre 1 et 50 inclus";
    this.ligne2 = "Essayez de le deviner en proposant ci-dessous";
    this.nbCoups = 0;
    this.nbUser = null;
    this.trouve = false;
  }
  onKeydown(event:any) {
    if (event.key === "Enter" && !this.trouve) {
      this.valider();
    }
  }

  // Fonction valider déclenchée par le bouton et keyUp
  valider() {
    // Récupération de la valeur saisie dans l'input
    let nbTmp: number = this.nbUser;
    //console.log(this.nbUser);

    // Test logique
    if (nbTmp === this.nbMystere) {
      this.nbCoups++;
      this.EndGame();
    }
    else if (nbTmp < this.nbMystere) {
      this.nbCoups++;
      this.ligne1 = `Le nombre mystère est plus grand que ${nbTmp}`;
    }
    else {
      this.nbCoups++;
      this.ligne1 = `Le nombre mystère est plus petit que ${nbTmp}`;
    }
    this.nbUser= null;
  }

  // Fonction EndGame
  EndGame = () => {
    this.ligne1 = `Bravo...! ! ! Vous avez trouvé en ${this.nbCoups} coups!`;
    this.ligne2 = `Le nombre mystère était ${this.nbMystere}!`;
    this.trouve=true;
  }
}
