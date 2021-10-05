import Personne from "./Personne";

export default class Cadre extends Personne{
    
    private job:string;

    constructor(Prenom:string, Nom:string, job:string="Cadre", Age?:number ){
        super(Prenom,Nom,Age);
        this.job=job;        
    }   

    getJob():string{
        return `${this.job}`;
    }

    display():string {
        return `${super.AffichageInfos()} - ${this.getJob()}`;
    }
 }