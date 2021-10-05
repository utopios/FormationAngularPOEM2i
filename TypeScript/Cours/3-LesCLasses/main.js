"use strict";
exports.__esModule = true;
var Personne_1 = require("./modules/Personne");
var Cadre_1 = require("./modules/Cadre");
var p1 = new Personne_1["default"]("George", "Clinton", 65);
console.log(p1.firstname);
console.log(p1.AffichageInfos());
var cadre1 = new Cadre_1["default"]("Emmanuel", "Macron", "CEO", 175);
console.log(cadre1.display());
