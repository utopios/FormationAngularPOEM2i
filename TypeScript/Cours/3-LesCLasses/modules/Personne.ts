export default class Personne {

    firstname:string;
    lastname:string;
    age:number;
    
    constructor(Prenom:string, Nom:string,age?:number){
        this.firstname=Prenom;
        this.lastname=Nom;
        this.age=age;
    }   

    AffichageInfos():string {
        return `${this.firstname} ${this.lastname} - ${this.age} ans`;
    }
 }