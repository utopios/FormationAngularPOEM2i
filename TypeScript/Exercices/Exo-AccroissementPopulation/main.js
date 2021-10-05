/**
 * EXERCICE - Accroissement Population
 */
// Déclaration variables
var nbhabitant = 96809, date = 2015, nbAnnee = 0, taux = 0.89;
console.log("Accroissement de la population de Tourcoing\n\nEn " + date + ", il a \u00E9t\u00E9 recens\u00E9 " + nbhabitant + " habitants.\nLe taux d'accroissement de la population \u00E9tant de " + taux + "%.\n\nCombiens faudra-t-il d'ann\u00E9es pour atteindre une population de 120.000 habitants ?\n");
// Boucle while
while (nbhabitant < 120000) {
    nbhabitant += nbhabitant * (taux / 100);
    console.log("\tEn " + ++date + ", il y aura " + Math.round(nbhabitant) + " habitants");
    nbAnnee++;
}
console.log("\nAvec un taux d'accroissement de la population de " + taux + "%, en " + date + ",\nil y aura " + Math.round(nbhabitant) + " habitants dans la ville de Tourcoing.\nIl aura fallu " + nbAnnee + " ann\u00E9es.");
