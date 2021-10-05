/**
 * Les Tableaux en TS
 */
var NomTableau = [];
NomTableau.push("Anthony"); // Pour ajouter des éléments dans le tableau
NomTableau.push("Jeanne", "Alice", "Mickael");
console.table(NomTableau);
console.log(NomTableau[0]);
for (var i = 0; i < NomTableau.length; i++)
    console.log(NomTableau[i]);
for (var _i = 0, NomTableau_1 = NomTableau; _i < NomTableau_1.length; _i++) {
    var prenom = NomTableau_1[_i];
    console.log(prenom);
}
/**
 * foreEach()
 */
NomTableau.forEach(function (element) { return console.log(element); });
/**
 * Concat
 */
var deuxiemeTableau = ["5", "4", "2", "3", "1", "1"];
console.log("Type : " + typeof (deuxiemeTableau));
var AlphaNumeric = NomTableau.concat(deuxiemeTableau);
console.log(AlphaNumeric);
/**
 * indexOf()
 */
var index = deuxiemeTableau.indexOf("4");
console.log(index); // retourn l'index si trouvé, sinon retourne -1
/**
 * lasindexOf()
 */
var index2 = deuxiemeTableau.lastIndexOf("2");
console.log(index2); // retourn l'index si trouvé, sinon retourne -1
/**
 * find(), filter()
 */
// let result1 = deuxiemeTableau.find(function (valeur) {
//     return valeur.includes("2");
// });
var result2 = deuxiemeTableau.filter(function (valeur) {
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
var chaine = deuxiemeTableau.join();
console.log(chaine);
/**
 * map()
 */
console.log("------ map() retourne un tableau avec les réponses ------");
var listChaine = deuxiemeTableau.map(function (element) {
    return element;
});
console.table(listChaine);
console.table(deuxiemeTableau);
/**
 * Sort()
 */
var tableTMP = deuxiemeTableau.sort();
console.table(tableTMP);
/**
 * Reverse()
 */
tableTMP = deuxiemeTableau.reverse();
console.table(tableTMP);
/**
 * Split()
 */
var maChaine = "kayak";
var tmp = maChaine.split('').reverse().join('');
console.log(tmp);
/**
 * ToString
 */
console.log(deuxiemeTableau.toString());
