/**
 * Les Tableaux en TS
 */

let NomTableau: string[] = [];
NomTableau.push("Anthony"); // Pour ajouter des éléments dans le tableau
NomTableau.push("Jeanne", "Alice", "Mickael");

console.table(NomTableau);

console.log(NomTableau[0]);

for (let i: number = 0; i < NomTableau.length; i++)
    console.log(NomTableau[i]);

for (let prenom of NomTableau) {
    console.log(prenom);
}

/**
 * foreEach()
 */
NomTableau.forEach((element) => console.log(element));

/**
 * Concat
 */

let deuxiemeTableau: any[] = ["5", "4", "2", "3", "1", "1"];
console.log("Type : " + typeof (deuxiemeTableau));
let AlphaNumeric = NomTableau.concat(deuxiemeTableau);

console.log(AlphaNumeric);

/**
 * indexOf()
 */

let index = deuxiemeTableau.indexOf("4");
console.log(index); // retourn l'index si trouvé, sinon retourne -1

/**
 * lasindexOf()
 */

let index2 = deuxiemeTableau.lastIndexOf("2");
console.log(index2); // retourn l'index si trouvé, sinon retourne -1

/**
 * find(), filter()
 */

// let result1 = deuxiemeTableau.find(function (valeur) {
//     return valeur.includes("2");
// });
let result2 = deuxiemeTableau.filter(function (valeur) {
    return valeur.includes("2");
});
console.table(result2);
//console.log(result1);

/**
 * Pop()
 */
console.table(deuxiemeTableau);

deuxiemeTableau.pop(); // retire le dernier element

console.table(deuxiemeTableau);


/**
 * join()
 */
console.table(deuxiemeTableau);
let chaine: string = deuxiemeTableau.join()
console.log(chaine);

/**
 * map()
 */

console.log("------ map() retourne un tableau avec les réponses ------");
const listChaine = deuxiemeTableau.map(function (element) {
    return element;
})

console.table(listChaine);

console.table(deuxiemeTableau);

/**
 * Sort()
 */
let tableTMP = deuxiemeTableau.sort()
console.table(tableTMP);

/**
 * Reverse()
 */
tableTMP = deuxiemeTableau.reverse();
console.table(tableTMP);





