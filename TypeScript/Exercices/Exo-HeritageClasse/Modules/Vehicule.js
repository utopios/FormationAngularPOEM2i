"use strict";
exports.__esModule = true;
var Vehicule = /** @class */ (function () {
    function Vehicule(marque, modele, kilometrage, annee) {
        this.marque = marque;
        this.modele = modele;
        this.kilometrage = kilometrage;
        this.annee = annee;
    }
    Vehicule.prototype.display = function () {
        return this.marque + " - " + this.modele + " - " + this.kilometrage + "km - " + this.annee;
    };
    return Vehicule;
}());
exports["default"] = Vehicule;
