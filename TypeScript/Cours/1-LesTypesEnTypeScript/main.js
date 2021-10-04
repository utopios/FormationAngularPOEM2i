// string
var nom;
nom = "Di Persio";
console.log(nom);
// number
var account = 5;
account = 20;
console.log("Le montant de votre compte affiche " + account + "\u20AC");
//console.log("Le montant de votre compte affiche " +account + "€");
// boolean
var valable = true;
valable = false;
console.log("La varible \"valable\" est \u00E0 : " + valable);
// Array
var tab = ["Alain", "Marc", "Jeanne", "Marie"];
var tab2;
tab2 = [4, 8, 3];
var tab3 = [true, false, true];
console.table(tab);
console.table(tab2);
console.table(tab3);
console.log(tab3);
// Any
var variable;
variable = 15;
console.log(typeof (variable) + " : " + variable);
variable = "Alain";
console.log(typeof (variable) + " : " + variable);
variable = [1, 3, 7];
console.log(typeof (variable) + " : " + variable);
variable = new Date();
console.log(typeof (variable) + " : " + variable);
// Enum
var color;
(function (color) {
    color[color["red"] = 0] = "red";
    color[color["black"] = 1] = "black";
    color[color["white"] = 2] = "white";
})(color || (color = {}));
;
var couleur = color.red;
console.log("Avec une enum => red: " + couleur);
// function void
function Affichage(message) {
    console.log("Le message est " + message);
}
Affichage("Salut à tous");
// Declaration d'un type Array()
var collection = [];
//let collection2 = new Array();
collection.push("Anthony");
collection.push(532);
console.table(collection);
// const
var var1 = 5;
//var1= 25;
var legumes = [
    {
        code: 1,
        nom: "Carotte",
        prix: 1.99
    },
    {
        code: 2,
        nom: "Salade",
        prix: 0.99
    },
    {
        code: 3,
        nom: "Poivron Vert",
        prix: 4.99
    },
    {
        code: 4,
        nom: "poivron Rouge",
        prix: 4.99
    }
];
console.table(legumes);
legumes.push({
    code: 5,
    nom: "poivron Jaune",
    prix: 4.99,
    reduction: 5
});
console.table(legumes);
//legumes[0].nom = "Navet";
legumes[0]["nom"] = "Navet";
console.table(legumes);
