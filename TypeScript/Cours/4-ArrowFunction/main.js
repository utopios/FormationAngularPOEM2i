// 1ere Declaration
function Affichage(message) {
    return "Message : " + message;
}
var message = "Hello world";
console.log(Affichage(message));
// 2eme declaration
var affichage2 = function (message) {
    return "Fonction 2 : " + message;
};
var message2 = affichage2("Hello World");
console.log(message2);
// 3eme déclaration
var affichage3 = function (message) { return "Fonction 2 : " + message; };
var Addition = function (a, b) { return a + b; };
console.log(Addition(4, 5));
