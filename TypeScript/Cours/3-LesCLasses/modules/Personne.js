"use strict";
exports.__esModule = true;
var Personne = /** @class */ (function () {
    function Personne(Prenom, Nom, age) {
        this.firstname = Prenom;
        this.lastname = Nom;
        this.age = age;
    }
    Personne.prototype.AffichageInfos = function () {
        return this.firstname + " " + this.lastname + " - " + this.age + " ans";
    };
    return Personne;
}());
exports["default"] = Personne;
