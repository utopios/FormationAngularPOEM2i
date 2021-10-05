/**
 * Les nouveautés des l'ES6
 */

// let

//console.log(lettmp);
console.log(vartmp); // Hoisting (remontée de déclaration de variable)


let lettmp;
var vartmp;

console.log("------ Nouveatés ES6 ------");

// const

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
        nom: "Poivron Rouge",
        prix: 4.99,
    }
]
// console.table(legumes);

// legumes.push({
//     code: 5,
//     nom: "poivron Jaune",
//     prix: 4.99
// });

// console.table(legumes);

// //legumes[0].nom = "Navet";
// legumes[0]["nom"] = "Navet";

// console.table(legumes);

/**
 * Les méthodes de la classe Array()
 * 
 * .foreach()
 * .map()
 * .find()
 * .filter()
 * 
 */

console.table(legumes);


// .foreach()
console.log("------ Foreach() ------");

legumes.forEach(function (legume) {
    console.log(legume.nom);
})

console.log("------ Foreach() avec deux paramètres ------");

legumes.forEach(function (legume, index) {
    console.log(`-${index + 1} : ${legume.nom}`);
})

// .map()
console.log("------ map() retourne un tableau avec les réponses ------");
const listLegumes = legumes.map(function (legume) {
    return legume.nom
})

console.table(legumes);
console.table(listLegumes);

// .find() => Retourne le premier élément d'une collection qui répond au critères
console.log("------ Find() Retourne le premier élément d'une collection ------");

const poivron = legumes.find(function (legume) {
    return legume.nom.includes("Poivron");
});



console.log(poivron);
console.log(legumes.find(function (legume) {
    return legume.nom.includes("Poivron");
}));

// .filter() => Retourne une collection d'éléments qui répondent au critères
console.log("------ .filter() Retourne une collection d'éléments qui répondent au critères ------");

const poivrons = legumes.filter(function (legume) {
    return legume.nom.includes("Poivron");
});

console.table(poivrons);

/**
 * Litéraux de Gabarit
 */
console.log("------ Les litéraux de Gabarit ------");

let prenom = "Jean", nom = "Valjean";

console.log("Bonjour," + prenom + " " + nom);// Concaténation classique

console.log(`Bonjour, ${prenom} ${nom}`); // Litéraux de Gabarit


/**
 * Destructuring
 * 
 * Accès simplifié à des valeurs, des elements d'un tableau, fd'un objet...
 */

// Avec les tableaux numérique
const tabNum = [1, 2, 3];
console.table(tabNum);

//  // En ES5
//  const a = tabNum[0];
//  const b = tabNum[1];

//console.log(a + " " + b);

// En ES6 grace au destructuring
const [a, b] = tabNum;

console.log(a);
console.log(b);

// Tableau Associtif
const user = {
    firstname: "Jean",
    lastname: "Dupond",
    age: 35,
    active: true
}
//  // En ES5
//  const firstname = user.firstname;
//  const lastname = user.lastname;

// console.log(firstname + " " + lastname);

// // En ES6 grace au destructuring
// const { firstname, lastname } = user;

// console.log(`Avec le destructuring de l'objet user : ${firstname} ${lastname} `);

// Avec des fonctions 
// Sans destructuring
// function getFullName(user) {
//     return `${user.firstname} ${user.lastname}`;
// }

// console.log(`Sans destructuring de méthode getFullName() : ` + getFullName(user));

// // Sans destructuring
// function getFullName(user) {
//     return `${user.firstname} ${user.lastname}`
// }

// console.log("Sans destructuring de méthode getFullName() : " + getFullName(user));

// Sans destructuring
function getFullName({ firstname, lastname }) {
    return `${firstname} ${lastname}`
}

console.log("Avec destructuring de méthode getFullName() : " + getFullName(user));

/**
 * LES FONCTION FLECHEE --> Arrow Function
 * 
 * Pour ecrire les fonctions flechée, on utlise
 * un opérateur nomé fat Arrow =>
 */
console.log("------ Arrow Function => ------");

//  // CAS 1
//  // Sans paramètres
//  let test = function(){
//      return "Toto";
//  } 

//  // Equivalent à 
//  test = () => {
//      // traitement
//      return "toto";
//  }

// // Simplification seulement si la fonction ne fait qu'un retour
// test = () => "Toto";
// //console.log(test());

// // CAS 2
// // Avec paramètres
//  let test2 = function(Legume){
//     return Legume.nom;
// } 

// // Equivalent à 
// test = (Legume) => {
//     // traitement
//     return Legume.nom;
// }

// // Simplification seulement si la fonction ne fait qu'un retour
// test = (Legume) => Legume.nom;

// // CAS 3
// // Avec au moins deux paramètres
// let test2 = function(firstname, lastname){
//     return `${firstname} ${lastname}`
// } 

// // Equivalent à 
// test = (firstname, lastname) => {
//     // traitement
//     return `${firstname} ${lastname}`;
// }

// // Simplification seulement si la fonction ne fait qu'un retour
// test = (firstname, lastname) => `${firstname} ${lastname}`;

/**
 * rest operator
 * 
 * ...
 */

// Avec tableau de légumes
//let carotte =legumes[0];
let carotte = { ...legumes[0] };

console.log(carotte);
console.log(legumes[0]);
console.table(legumes);

carotte.prix = 8.99;

console.log(carotte);
console.log(legumes[0]);
console.table(legumes);

// Autre exemple avec tableau numérique ( destructuring)
// Avec les tableaux numérique
const tabNum2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.table(tabNum2);

// En ES6 grace au destructuring
const [c, ...d] = tabNum2;
console.log(c);
console.log(d);
//c=89;
d[0] = 56;
console.log(d);
console.table(tabNum2);


/**
 * Les valeurs par defaut pour les paramètre d'une fonction
 */
console.log("------ Valeur par défaut ------");

function aireCarre(nb=10) {
    return nb * nb;
}
let personne1 = new Personne("George", "Clinton"); // fais appel au constructeur
console.log(personne1.firstname);
console.log(personne1.getFullName());




console.log("Aire du carré = "+aireCarre(5)+"cm²");
console.log("Aire du carré = "+aireCarre()+"cm²");

/**
 *  Les classes
 * 
 * L'es6 à enfin introduit les classes
 */
 
console.log("------ Les classes en javascript ES6 ------");

 class Personne {

    firstname;
    lastname;

    constructor(firstname, lastname){
        this.firstname=firstname;
        this.lastname=lastname
    }   

    getFullName() {
        return `${this.firstname} ${this.lastname}`;
    }
 }

 let p1 = new Personne("George","Clinton");
 console.log(p1.firstname);
 console.log(p1.getFullName());

 class Cadre extends Personne{
    
    job;

    constructor(firstname, lastname, job="Cadre"){
        super(firstname,lastname);
        this.job=job;        
    }   

    getJob(){
        return `${this.job}`;
    }

    display() {
        return `${super.getFullName()} - ${this.getJob()}`;
    }
 }

 let cadre1 = new Cadre("Emmanuel","Macron","CEO");
 console.log(cadre1.display());
