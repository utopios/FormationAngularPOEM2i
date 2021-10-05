class Personne {

    firstname:string;
    lastname:string;
    age:number;
    
    constructor(Prenom:string, Nom:string,age?:number){
        this.firstname=Prenom;
        this.lastname=Nom;
        this.age=age;
    }   

    AffichageInfos() {
        return `${this.firstname} ${this.lastname} - ${this.age} ans`;
    }
 }

 let p1 = new Personne("George","Clinton",65);
 console.log(p1.firstname);
 console.log(p1.AffichageInfos());




 class Cadre extends Personne{
    
    job:string;

    constructor(Prenom:string, Nom:string, job:string="Cadre", Age?:number ){
        super(Prenom,Nom,Age);
        this.job=job;        
    }   

    getJob(){
        return `${this.job}`;
    }

    display() {
        return `${super.AffichageInfos()} - ${this.getJob()}`;
    }
 }

 let cadre1 = new Cadre("Emmanuel","Macron","CEO",175);
 console.log(cadre1.display());


 