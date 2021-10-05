// 1ere Declaration
function Affichage(message: string): string {
    return "Message : " + message;
}


let message = "Hello world";
console.log(Affichage(message));

// 2eme declaration
let affichage2= function(message:string):string{
    return `Fonction 2 : ${message}`;
}

let message2=affichage2("Hello World");
console.log(message2);

// 3eme déclaration

let affichage3 = (message:string):string => `Fonction 2 : ${message}`;

let Addition = (a:number, b:number):number => a+b;

console.log(Addition(4,5));



