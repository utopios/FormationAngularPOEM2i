"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Personne_1 = require("./Personne");
var Cadre = /** @class */ (function (_super) {
    __extends(Cadre, _super);
    function Cadre(Prenom, Nom, job, Age) {
        if (job === void 0) { job = "Cadre"; }
        var _this = _super.call(this, Prenom, Nom, Age) || this;
        _this.job = job;
        return _this;
    }
    Cadre.prototype.getJob = function () {
        return "" + this.job;
    };
    Cadre.prototype.display = function () {
        return _super.prototype.AffichageInfos.call(this) + " - " + this.getJob();
    };
    return Cadre;
}(Personne_1["default"]));
exports["default"] = Cadre;
