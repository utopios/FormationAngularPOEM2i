// string

let nom: string;

nom = "Di Persio";

console.log(nom);

// number
let account: number = 5;
account = 20;

console.log(`Le montant de votre compte affiche ${account}€`);
//console.log("Le montant de votre compte affiche " +account + "€");

// boolean
let valable: boolean = true;
valable = false;
console.log(`La varible "valable" est à : ${valable}`);

// Array
let tab: string[] = ["Alain", "Marc", "Jeanne", "Marie"];

let tab2: number[];
tab2 = [4, 8, 3];

let tab3: boolean[] = [true, false, true];

console.table(tab);
console.table(tab2);
console.table(tab3);
console.log(tab3);

// Any
let variable: any;

variable = 15;
console.log(`${typeof (variable)} : ${variable}`);


variable = "Alain";
console.log(`${typeof (variable)} : ${variable}`);


variable = [1, 3, 7];
console.log(`${typeof (variable)} : ${variable}`);

variable = new Date();
console.log(`${typeof (variable)} : ${variable}`);


// Enum
enum color {
    red = 0,
    black = 1,
    white = 2
};

let couleur: color = color.red;
console.log(`Avec une enum => red: ${couleur}`);


// function void
function Affichage(message) {
    console.log(`Le message est ${message}`);
}

Affichage("Salut à tous");


// Declaration d'un type Array()
let collection = [];
//let collection2 = new Array();

collection.push("Anthony");
collection.push(532);

console.table(collection);

// const
const var1 = 5

//var1= 25;

const legumes = [
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
        prix: 4.99,        
    }
]
console.table(legumes);

legumes.push({
    code: 5,
    nom: "poivron Jaune",
    prix: 4.99
});

console.table(legumes);

//legumes[0].nom = "Navet";
legumes[0]["nom"] = "Navet";

console.table(legumes);
